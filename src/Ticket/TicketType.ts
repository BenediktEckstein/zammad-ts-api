import { CreateArticleViaTicketRequest } from "../Article/ArticleType.js";
import { z } from "zod";
import { expandedTicketSchema, ticketSchema } from "./TicketValidator.js";
import { Expand } from "../Utility/@type.js";

export type TicketExpansion =
  | Record<string, string | string[] | number | number[]>
  | undefined;

export type ApiTicket<E extends TicketExpansion = undefined> = Expand<
  z.infer<typeof ticketSchema> & { [K in keyof E]: E[K] }
>;

export type ExpandedApiTicket<E extends TicketExpansion = undefined> = Expand<
  z.infer<typeof expandedTicketSchema> & { [K in keyof E]: E[K] }
>;

export type CreateTicketInput<E extends TicketExpansion = undefined> = Expand<
  {
    title: string;
    group_id?: number;
    customer_id?: number;
    owner_id?: number;
    mentions?: number[];
    article: CreateArticleViaTicketRequest;
  } & Partial<E>
>;

export type UpdateTicketInput<E extends TicketExpansion = undefined> = Expand<
  {
    title?: string | null | undefined;
    group_id?: number | null | undefined;
    customer_id?: number | null | undefined;
    owner_id?: number | null | undefined;
    mentions?: number[];
  } & Partial<E>
>;
