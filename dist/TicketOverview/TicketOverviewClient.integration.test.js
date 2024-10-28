/**
 * @jest-environment node
 */
import Client from "../Client/Client.js";
import { devFqdn, devAdminPassword, devAdminUsername } from "../test/api.js";
import { beforeAll, test, expect } from "@jest/globals";
const zammad = new Client(devFqdn, {
    username: devAdminUsername,
    password: devAdminPassword,
}, { Ticket: { preview: { type: "string" } } });
let overviews;
beforeAll(async () => {
    const ovs = await zammad.ticketOverview.getAll();
    overviews = ovs;
});
test("ticket overview", async () => {
    for (const t of overviews) {
        const ticket = await zammad.ticketOverview.getByLink(t.link);
        expect(ticket).toBeTruthy();
    }
}, 20000);
