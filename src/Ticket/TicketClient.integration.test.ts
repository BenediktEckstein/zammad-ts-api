/**
 * @jest-environment node
 */

import Client from "../Client/Client.js";
import { devFqdn, devAdminPassword, devAdminUsername } from "../test/api.js";
import { beforeAll, test, expect } from "@jest/globals";
import { ApiTicket } from "./TicketType.js";

const zammad = new Client<{ Ticket: { extensions: { preview: string } } }>(
  devFqdn,
  {
    username: devAdminUsername,
    password: devAdminPassword,
  },
  { Ticket: { preview: { type: "string" } } }
);

let existingTickets: ApiTicket<{ preview: string }>[] = [];
let createInput: {
  title: string;
  group_id: number;
  customer_id: number;
  owner_id: number;
  article: {
    subject: string;
    body: string;
    type: "note";
    internal: true;
  };
};

beforeAll(async () => {
  existingTickets = await zammad.ticket.getAll({ per_page: 10 });

  const groupId = existingTickets.find((e) => e.group_id)?.group_id;
  const ownerId = existingTickets.find((e) => e.owner_id)?.owner_id;
  const customerId = existingTickets.find((e) => e.customer_id)?.customer_id;

  createInput = {
    title: `Test api ticket ${new Date().toUTCString()}`,
    group_id: groupId ?? 1,
    customer_id: customerId ?? 1,
    owner_id: ownerId ?? 1,
    article: {
      subject: "Test article",
      body: "test article body",
      type: "note" as const,
      internal: true,
    },
  };
});

test("ticket list get", async () => {
  const ticket = await zammad.ticket.getAll();
  const expandedTicket = await zammad.ticket.getAll({ expand: true });
});

test("ticket get", async () => {
  expect.assertions(existingTickets.length * 2);

  for (const t of existingTickets) {
    const ticket = await zammad.ticket.getById(t.id);
    const expandedTicket = await zammad.ticket.getById(t.id, {
      expand: true,
    });

    expect(ticket).toBeTruthy();
    expect(expandedTicket).toBeTruthy();
  }
});

test("ticket get/update nonexistent", async () => {
  expect.assertions(3)


  //known non-existent tickets
  const ticket = await zammad.ticket.getById(1);
  const expandedTicket = await zammad.ticket.getById(1, {
    expand: true,
  });

  try {
    const a = await zammad.ticket.update(1, { title: "Test title update" });

    console.log("UPDATE RETURN", a);
  } catch (e) {
    expect(e).toBeTruthy();
  }

  expect(ticket).toBeNull();
  expect(expandedTicket).toBeNull();
});

test("ticket search", async () => {
  let response = await zammad.ticket.search({ query: "Test" });
  expect(response).toBeTruthy();

  // if (response.assets?.Ticket)
  // Object.entries(response.assets?.Ticket).map(([k, v]) => console.log(v));
});

test("ticket create, update, and delete", async () => {
  const created = await zammad.ticket.create(createInput);

  for (const k of ["title", "group_id", "customer_id", "owner_id"] as const) {
    expect(created[k]).toBe(createInput[k]);
  }

  //TODO test created article

  const newGroupId = existingTickets.find(
    (e) => e.group_id && e.group_id !== created.group_id
  )?.group_id;
  const newOwnerId = existingTickets.find(
    (e) => e.owner_id && e.owner_id !== created.owner_id
  )?.owner_id;
  const newCustomerId = existingTickets.find(
    (e) => e.customer_id && e.customer_id !== created.customer_id
  )?.customer_id;

  const updateInput = {
    title: `Updated ticket title: ${new Date().toISOString()}`,
    group_id: newGroupId,
    customer_id: newCustomerId,
    owner_id: newOwnerId,
  };

  const updated = await zammad.ticket.update(created.id, updateInput);

  if (!updated) throw new Error("no ticket returned on update");
  for (const k of ["title", "group_id", "customer_id", "owner_id"] as const) {
    if (updateInput[k] !== undefined) expect(updated[k]).toBe(updateInput[k]);
    else expect(updated[k]).toBe(created[k]);
  }

  await zammad.ticket.delete(updated.id);

  const deleted = await zammad.ticket.getById(updated.id);
  expect(deleted).toBeNull();
});
