/**
 * @jest-environment node
 */

import Client from "../dist/Client/Client.js";
import { zammadDevFqdn, zammadPassword, zammadUsername } from "./api/api.js";

const zammad = new Client(zammadDevFqdn, zammadUsername, zammadPassword);

test("query all to check for validation errors", async () => {
 const tickets =  await zammad.ticket.getAll();
  await zammad.ticket.getAll({ expand:true });
  await zammad.ticket.getById(tickets[0].id,);
  await zammad.ticket.getById(tickets[1].id,{  expand:true});
  await zammad.ticket.search({ query:"test" });

 const users = await zammad.user.getAll();
  await zammad.user.getAll({ expand: true });
  await zammad.user.getById(users[0].id, );
  await zammad.user.getById(users[1].id, {
    expand: true,
  });
  await zammad.user.search({ per_page: qty, query: "test" });

 const articles = await zammad.article.getAll();
  await zammad.article.getById(articles[0].id);

  const states = await zammad.state.getAll();
  await zammad.state.getById(states[0].id);
 
});
