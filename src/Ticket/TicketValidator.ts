import { z } from "zod";
import { userSchema } from "../User/UserValidator.js";
import { makeValidator } from "../Utility/Valdation.js";

const basicTicketSchema = z
.object({
  id: z.number(),
  group_id: z.number(),
  priority_id: z.number(),
  state_id: z.number().nullable(),
  organization_id: z.number().nullable(),
  number: z.string(),
  title: z.string(),
  owner_id: z.number().nullable(),
  customer_id: z.number().nullable(),
  note: z.string().nullable(),
  first_response_at: z.string().datetime().nullable(),
  first_response_escalation_at: z.string().datetime().nullable(),
  first_response_in_min: z.number().nullable(),
  first_response_diff_in_min: z.number().nullable(),
  close_at: z.string().datetime().nullable(),
  close_escalation_at: z.string().datetime().nullable(),
  close_in_min: z.number().nullable(),
  close_diff_in_min: z.number().nullable(),
  update_escalation_at: z.string().datetime().nullable(),
  update_in_min: z.number().nullable(),
  update_diff_in_min: z.number().nullable(),
  last_contact_at: z.string().datetime().nullable(),
  last_contact_agent_at: z.string().datetime().nullable(),
  last_contact_customer_at: z.string().datetime().nullable(),
  last_owner_update_at: z.string().datetime().nullable(),
  create_article_type_id: z.number(),
  create_article_sender_id: z.number(),
  article_count: z.number(),
  escalation_at: z.string().datetime().nullable(),
  // pending_time: string|null
  // type: null
  // time_unit: null
  // preferences: {}
  updated_by_id: z.number().nullable(),
  created_by_id: z.number(),
  created_at: z.string().datetime(),
  updated_at: z.string().datetime(),
})

export const ticketSchema = basicTicketSchema
  .passthrough()

export const expandedTicketSchema = basicTicketSchema
  .extend({
    article_ids: z.array(z.number()),
    //   // ticket_time_accounting_ids: [],
    group: z.string().nullable(),
    organization: z.string().nullable().optional(),
    //   // ticket_time_accounting: [],
    state: z.string(),
    priority: z.string(),
    owner: z.string().nullable(),
    customer: z.string().nullable(),
    created_by: z.string().nullable(),
    updated_by: z.string().nullable(),
    create_article_type: z.string().nullable(),
    create_article_sender: z.string().nullable(),
  })
  .passthrough()

const ticketSearchSchema = z
  .object({
    tickets: z.array(z.number()).optional(),
    tickets_count: z.number().optional(),
    assets: z
      .object({
        Ticket: z.record(z.string(), basicTicketSchema).optional(),
        User: z.record(z.string(), userSchema).optional(),
        // Role
        // Group
        // Organization
      })
      .passthrough(),
  })
  .passthrough()
 

export class TicketValidator<
  T extends Record<string, "string" | "number"> | undefined
> {
  constructor(options?: { expansions?: T | undefined }) {
    this.expansions = options?.expansions;

    this.apiTicket = makeValidator(ticketSchema);

    this.apiTicketExpanded = makeValidator(expandedTicketSchema);

    this.apiTicketSearchResult = makeValidator(ticketSearchSchema);
  }

  expansions: T | undefined;

  apiTicket;

  apiTicketExpanded;

  apiTicketSearchResult;
}
