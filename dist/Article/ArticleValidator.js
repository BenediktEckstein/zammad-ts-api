import { z } from "zod";
import { makeValidator } from "../Utility/Valdation.js";
export const articleTypeSchema = z.enum(["email",
    "phone",
    "web",
    "note",
    "sms",
    "chat",
    "fax",
    "twitter status",
    "twitter direct-message",
    "facebook feed post",
    "facebook feed comment",
    "telegram personal-message"]);
export const articleSenderSchema = z.enum(["Agent", "Customer", "System"]);
export const articleContentTypeSchema = z.enum(["text/html", "text/plain"]);
export const articleSchema = z.object({
    id: z.number(),
    ticket_id: z.number(),
    type_id: z.number(),
    sender_id: z.number(),
    from: z.string().nullable(),
    to: z.string().nullable(),
    cc: z.string().nullable(),
    subject: z.string().nullable(),
    reply_to: z.string().nullable(),
    message_id: z.number().nullable(),
    //       "message_id_md5": null,
    //       "in_reply_to": null,
    content_type: articleContentTypeSchema,
    //       "references": null,
    body: z.string(),
    internal: z.boolean(),
    //       "preferences": {},
    created_by_id: z.number(),
    created_by: z.string(),
    created_at: z.string().datetime(),
    updated_by_id: z.number().nullable(),
    updated_by: z.string().nullable(),
    updated_at: z.string().datetime(),
    origin_by_id: z.number().nullable(),
    //       "attachments": [],
    type: articleTypeSchema,
    sender: articleSenderSchema,
    //       "time_unit": null
}).passthrough();
// const ticketSearchSchema = z.object({
//   ticket: z.array(z.number()),
//   ticket_count: z.number(),
//   assets: z.object({
//     Ticket: z.record(z.string(), articleSchema),
//     User: z.record(z.string(), userValidator),
//     // Role
//     // Group
//     // Organization
//   }),
// });
export class ArticleValidator {
    static validateApiArticle = makeValidator(articleSchema);
}
