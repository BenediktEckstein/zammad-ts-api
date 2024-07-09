/**
 * @jest-environment node
 */

import Client from "../dist/Client/Client.js";
import { zammadDevFqdn, zammadPassword, zammadUsername } from "./api/api";
import { generate as randomString } from "randomstring";

const zammad = new Client(zammadDevFqdn, zammadUsername, zammadPassword);

let existingTickets = [];

beforeAll(async () => {
  existingTickets = await zammad.ticket.getAll({ per_page: 10 });
});
/**
 * Create a user json object with random data
 */
function createNewTicket() {
  const group_id = DataSeeder.randomId();
  const priority_id = DataSeeder.randomId();
  const state_id = DataSeeder.randomId();
  const customer_id = DataSeeder.randomId();
  const owner_id = DataSeeder.randomId();
  const updatedAt = DataSeeder.randomIsoTimestamp();
  const createdAt = DataSeeder.randomIsoTimestamp();

  return {
    id,
    group_id,
    priority_id,
    state_id,
    title:randomString(20),
    customer_id,
    owner_id,
    note:randomString(50),
    updated_at: updatedAt,
    created_at: createdAt,
  };
}

/**
 * Check if api ticket object matches parsed ticket
 * @param {object} apiTicket json ticket api object
 * @param {User} parsedTicket ticket parsed by the implementation
 */
function checkIfApiTicketMatchesParsed(apiTicket, parsedTicket) {
    expect(typeof parsedTicket).toBe("object");
    expect(typeof apiTicket).toBe("object");

    expect(parsedTicket.id).toBe(apiTicket.id);
    expect(parsedTicket.groupId).toBe(apiTicket.group_id);
    expect(parsedTicket.priorityId).toBe(apiTicket.priority_id);
    expect(parsedTicket.stateId).toBe(apiTicket.state_id);
    expect(parsedTicket.number).toBe(apiTicket.number);
    expect(parsedTicket.title).toBe(apiTicket.title);
    expect(parsedTicket.customerId).toBe(apiTicket.customer_id);
    expect(parsedTicket.ownerId).toBe(apiTicket.owner_id);
    expect(parsedTicket.note).toBe(apiTicket.note);
    expect(parsedTicket.updatedAt).toBe(apiTicket.updated_at);
    expect(parsedTicket.createdAt).toBe(apiTicket.created_at);
}

test("ticket list get", async () => {
  const qty = 75; // <= 100
  const response = await zammad.ticket.getAll({ per_page: qty });

  expect(response.length).toBe(qty);
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
//     let queryString = DataSeeder.randomString(10);

//     let randomApiTickets = Array(Math.floor(Math.random() * 9) + 1);
//     for (i = 0; i < randomApiTickets.length; i++) {
//         randomApiTickets[i] = createRandomTicket();
//     }
//     ep.createEndpoint(
//         DummyEndpointProvider.Method.GET,
//         "/tickets/search",
//         randomApiTickets,
//         async (req) => {
//             //expect to have query string that matches
//             expect(req.query).toHaveProperty("query", queryString);
//             requestMade = true;
//         }
//     );

//     let response = await Ticket.search(zammad, queryString);
//     let checkedObjects = 0;

//     for (i = 0; i < response.length; i++) {
//         //iterate over all users, search for matching json object
//         randomApiTickets.forEach((obj) => {
//             if (obj.id == response[i].id) {
//                 checkIfApiTicketMatchesParsed(obj, response[i]);
//                 checkedObjects++;
//             }
//         });
//     }

//     expect(checkedObjects).toBe(randomApiTickets.length);
//     expect(requestMade).toBe(true);
// });

test("ticket create", async () => {
  const groupId = existingTickets.find((e) => e.group_id).group_id;
  const ownerId = existingTickets.find((e) => e.owner_id).owner_id;
  const customerId = existingTickets.find((e) => e.customer_id).customer_id;

  const input = {
    title: "Test api ticket",
    group_id: groupId,
    customer_id: customerId,
    owner_id: ownerId,
    article: {
      subject: "Test article",
      body: "test article body",
      type: "note",
      internal: true,
    },
  };

  const expandOutput = await zammad.ticket.create(input, {expand:true});

  const regOutput = await zammad.ticket.getById(expandOutput.id)

console.log("create output", expandOutput)

  for (const k of ["title", "group_id", "customer_id", "owner_id"]) {
    expect(expandOutput[k]).toBe(input[k]);
  }

  //TODO test created article
});

test("ticket update", async () => {
    const id = existingTickets[existingTickets.length-1].id
    const groupId = existingTickets.find((e) => e.group_id).group_id;
    const ownerId = existingTickets.find((e) => e.owner_id).owner_id;
    const customerId = existingTickets.find((e) => e.customer_id).customer_id;
  
    const input = {
      title: "Updated ticket title",
      group_id: groupId,
      customer_id: customerId,
      owner_id: ownerId,
    };
  
  
    const regOutput = await zammad.ticket.update(id, input, {expand:true})
  
  console.log("update output", regOutput)
  
    for (const k of Object.keys(input)) {
      expect(regOutput[k]).toBe(input[k]);
    }

});

// test("ticket delete", async () => {
//     let plainTicket = createRandomTicket();
//     let ticket = Ticket.fromApiObject(plainTicket);
//     let requestMade = false;

//     ep.createEndpoint(
//         DummyEndpointProvider.Method.DELETE,
//         "/tickets/" + plainTicket.id,
//         {},
//         (req) => {
//             requestMade = true;
//         }
//     );
//     await ticket.delete(zammad);
//     expect(requestMade).toBe(true);
// });
