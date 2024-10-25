import Client from "../Client/Client.js";
import { devFqdn, devAdminPassword, devAdminUsername } from "../test/api.js";
import { test } from "@jest/globals";
const zammad = new Client(devFqdn, {
    username: devAdminUsername,
    password: devAdminPassword,
});
// let existingUsers: ApiUser[] = [];
// beforeAll(async () => {
//   existingUsers = await zammad.user.getAll({ per_page: 10 });
// });
test("user list get", async () => {
    await zammad.user.getAll();
    await zammad.user.getAll({ expand: true });
});
// test("user get", async () => {
//   expect.assertions(existingUsers.length * 2);
//   for (const t of existingUsers) {
//     const user = await zammad.user.getById(t.id);
//     const expandedUser = await zammad.user.getById(t.id, {
//       expand: true,
//     });
//     expect(user).toBeTruthy();
//     expect(expandedUser).toBeTruthy();
//   }
// });
// test("user search", async () => {
//   let response = await zammad.user.search({ query: "Test" });
//   expect(response).toBeTruthy();
// });
// test("user create, update, and delete", async () => {
//   const createInput = {
//     firstname: "Test Creation 2",
//     lastname: "Test Last Name 2",
//     email: `${new Date().getTime()}2@mail.com`, //lets us create bad email?
//   };
//   const created = await zammad.user.create(createInput);
//   const userKeys = ["firstname", "lastname", "email"] as const;
//   for (const k of userKeys) {
//     expect(created[k]).toBe(createInput[k]);
//   }
//   const updateInput = {
//     firstname: "Test Update",
//     lastname: "Test updated Last Name",
//     email: `${new Date().getTime()}3@mail.com`, //lets us create bad email?
//   };
//   const updated = await zammad.user.update(created.id, updateInput);
//   for (const k of userKeys) {
//     if (updateInput[k] !== undefined) expect(updated[k]).toBe(updateInput[k]);
//     else expect(updated[k]).toBe(created[k]);
//   }
//   await zammad.user.delete(updated.id);
//   let errored = false;
//   try {
//     await zammad.user.getById(updated.id);
//   } catch (e) {
//     errored = true;
//   }
//   if (errored !== true) throw new Error("did not 404 on request after delete");
// });
