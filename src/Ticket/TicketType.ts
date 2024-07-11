import { CreateArticleViaTicketRequest } from "../Article/ArticleType.js";
import { z } from "zod";
import { expandedTicketSchema, ticketSchema } from "./TicketValidator.js";
export type ApiTicket = z.infer<typeof ticketSchema>;

export type ExpandedApiTicket = z.infer<typeof expandedTicketSchema>;

export type CreateTicketInput = {
  title: string;
  group_id?: number;
  customer_id?: number;
  owner_id?: number;
  mentions?: number[];
  article: CreateArticleViaTicketRequest;
};

export interface UpdateTicketInput {
  title?: string | null | undefined;
  group_id?: number | null | undefined;
  customer_id?: number | null | undefined;
  owner_id?: number | null | undefined;
  mentions?: number[];
  [key: string]: unknown;
}
