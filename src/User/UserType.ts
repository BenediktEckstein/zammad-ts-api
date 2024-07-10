import { CreateArticleViaTicketRequest } from "../Article/ArticleType.js";
import { z } from "zod";
import { expandedUserSchema, userSchema } from "./UserValidator.js";

export type ApiUser = z.infer<typeof userSchema>;

export type ExpandedApiUser = z.infer<typeof expandedUserSchema>;

export type CreateTicketInput = {
//   title: string;
//   group_id: number;
//   customer_id: number;
//   owner_id?: number;
//   mentions?: number[];
//   article: CreateArticleViaTicketRequest;


  "firstname": string,
  "lastname": string,
  "email": string,
  "login": string,
  "organization": string,
  "roles": 
}

// export interface UpdateTicketInput extends ApiTicket {
//   [key: string]: unknown;
// }
