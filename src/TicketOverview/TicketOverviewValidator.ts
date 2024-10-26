import { z } from "zod";
import { makeValidator } from "../Utility/Valdation.js";
import { ticketSchema } from "../Ticket/TicketValidator.js";

const TicketOverviewSimpleSchema = z
  .object({
    id: z.number(),
    name: z.string(),
    prio: z.number(),
    link: z.string(),
    count: z.number(),
  })
  .passthrough();

export const TicketOverviewSimpleList = z.array(TicketOverviewSimpleSchema);

export const TicketOverviewDetailedSchema = z
  .object({
    assets: z
      .object({
        Group: z.record(z.string(), z.object({}).passthrough()).optional(),
        Overview: z.record(z.string(), z.object({}).passthrough()).optional(),
        Role: z.record(z.string(), z.object({}).passthrough()).optional(),
        Ticket: z.record(z.string(), ticketSchema).optional(),
        TicketState: z.record(z.string(), z.object({}).passthrough()).optional(),
        User: z.record(z.string(), z.object({}).passthrough()).optional(),
      })
      .passthrough(),
  })
  .passthrough();

export class TicketOverviewValidator {
  constructor() {
    this.ticketOverviews = makeValidator(TicketOverviewSimpleList);
    this.ticketOverview = makeValidator(TicketOverviewDetailedSchema);
  }

  ticketOverviews;

  ticketOverview;
}
