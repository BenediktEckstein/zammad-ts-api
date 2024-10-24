/**
 * @jest-environment node
 */

import Client from "../Client/Client.js";
import { devFqdn, devAdminPassword, devAdminUsername } from "../test/api.js";
import { beforeAll, test, expect } from "@jest/globals";
import { ApiTicket } from "./TicketType.js";

const zammad = new Client(devFqdn, {
  username: devAdminUsername,
  password: devAdminPassword,
});

let existingTickets: ApiTicket[] = [];
let createInput: {
  title: "Test api ticket";
  group_id: number;
  customer_id: number;
  owner_id: number;
  article: {
    subject: "Test article";
    body: "test article body";
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
    title: "Test api ticket",
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
  await zammad.ticket.getAll();
  await zammad.ticket.getAll({ expand: true });
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

// test("ticket search", async () => {
//   const title = `Test api ticket ${new Date().toUTCString()}`;

//   const created = await zammad.ticket.create(createInput);
//   console.log("CREATED TICKET", created);
//   let response = await zammad.ticket.search({ query: "Test",  });

//   const createdFound = response.assets.Ticket[created.id];
//   expect(createdFound).toBeTruthy();
// });

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

  for (const k of ["title", "group_id", "customer_id", "owner_id"] as const) {
    if (updateInput[k] !== undefined) expect(updated[k]).toBe(updateInput[k]);
    else expect(updated[k]).toBe(created[k]);
  }

  await zammad.ticket.delete(updated.id);

  let errored = false;
  try {
    await zammad.ticket.getById(updated.id);
  } catch (e) {
    errored = true;
  }
  if (errored !== true) throw new Error("did not 404 on request after delete");
});
