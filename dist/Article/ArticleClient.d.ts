import ZammadClient from "../Client/Client.js";
import { OnBehalfParams, PaginationParams, SortParams } from "../Client/Parameter.js";
import { CreateArticleRequest } from "./ArticleType.js";
export default class ArticleClient {
    constructor(api: ZammadClient);
    private _api;
    private _val;
    /**
     * Gets all articles that the authenticated user can view on a ticket
     * @param id id of the ticket
     * @param params Request options
     */
    getByTicketId(id: number, params?: PaginationParams & OnBehalfParams & SortParams): Promise<import("zod").objectInputType<{
        id: import("zod").ZodNumber;
        ticket_id: import("zod").ZodNumber;
        type_id: import("zod").ZodNumber;
        sender_id: import("zod").ZodNumber;
        from: import("zod").ZodNullable<import("zod").ZodString>;
        to: import("zod").ZodNullable<import("zod").ZodString>;
        cc: import("zod").ZodNullable<import("zod").ZodString>;
        subject: import("zod").ZodNullable<import("zod").ZodString>;
        reply_to: import("zod").ZodNullable<import("zod").ZodString>;
        message_id: import("zod").ZodNullable<import("zod").ZodNumber>;
        content_type: import("zod").ZodEnum<["text/html", "text/plain"]>;
        body: import("zod").ZodString;
        internal: import("zod").ZodBoolean;
        created_by_id: import("zod").ZodNumber;
        created_by: import("zod").ZodString;
        created_at: import("zod").ZodString;
        updated_by_id: import("zod").ZodNullable<import("zod").ZodNumber>;
        updated_by: import("zod").ZodNullable<import("zod").ZodString>;
        updated_at: import("zod").ZodString;
        origin_by_id: import("zod").ZodNullable<import("zod").ZodNumber>;
        type: import("zod").ZodEnum<["email", "phone", "web", "note", "sms", "chat", "fax", "twitter status", "twitter direct-message", "facebook feed post", "facebook feed comment", "telegram personal-message"]>;
        sender: import("zod").ZodEnum<["Agent", "Customer", "System"]>;
    }, import("zod").ZodTypeAny, "passthrough">[]>;
    /**
     * Gets all articles that the authenticated user can view on a ticket
     * @deprecated use .getTicketById method
     * @param id id of the ticket
     * @param params Request options
     */
    getAll(...params: Parameters<typeof this.getByTicketId>): Promise<import("zod").objectInputType<{
        id: import("zod").ZodNumber;
        ticket_id: import("zod").ZodNumber;
        type_id: import("zod").ZodNumber;
        sender_id: import("zod").ZodNumber;
        from: import("zod").ZodNullable<import("zod").ZodString>;
        to: import("zod").ZodNullable<import("zod").ZodString>;
        cc: import("zod").ZodNullable<import("zod").ZodString>;
        subject: import("zod").ZodNullable<import("zod").ZodString>;
        reply_to: import("zod").ZodNullable<import("zod").ZodString>;
        message_id: import("zod").ZodNullable<import("zod").ZodNumber>;
        content_type: import("zod").ZodEnum<["text/html", "text/plain"]>;
        body: import("zod").ZodString;
        internal: import("zod").ZodBoolean;
        created_by_id: import("zod").ZodNumber;
        created_by: import("zod").ZodString;
        created_at: import("zod").ZodString;
        updated_by_id: import("zod").ZodNullable<import("zod").ZodNumber>;
        updated_by: import("zod").ZodNullable<import("zod").ZodString>;
        updated_at: import("zod").ZodString;
        origin_by_id: import("zod").ZodNullable<import("zod").ZodNumber>;
        type: import("zod").ZodEnum<["email", "phone", "web", "note", "sms", "chat", "fax", "twitter status", "twitter direct-message", "facebook feed post", "facebook feed comment", "telegram personal-message"]>;
        sender: import("zod").ZodEnum<["Agent", "Customer", "System"]>;
    }, import("zod").ZodTypeAny, "passthrough">[]>;
    /**
     * Get an article by its id
     * @param id of article to get
     * @param params for get endpoint
     */
    getById(id: number, params?: OnBehalfParams): Promise<import("zod").objectInputType<{
        id: import("zod").ZodNumber;
        ticket_id: import("zod").ZodNumber;
        type_id: import("zod").ZodNumber;
        sender_id: import("zod").ZodNumber;
        from: import("zod").ZodNullable<import("zod").ZodString>;
        to: import("zod").ZodNullable<import("zod").ZodString>;
        cc: import("zod").ZodNullable<import("zod").ZodString>;
        subject: import("zod").ZodNullable<import("zod").ZodString>;
        reply_to: import("zod").ZodNullable<import("zod").ZodString>;
        message_id: import("zod").ZodNullable<import("zod").ZodNumber>;
        content_type: import("zod").ZodEnum<["text/html", "text/plain"]>;
        body: import("zod").ZodString;
        internal: import("zod").ZodBoolean;
        created_by_id: import("zod").ZodNumber;
        created_by: import("zod").ZodString;
        created_at: import("zod").ZodString;
        updated_by_id: import("zod").ZodNullable<import("zod").ZodNumber>;
        updated_by: import("zod").ZodNullable<import("zod").ZodString>;
        updated_at: import("zod").ZodString;
        origin_by_id: import("zod").ZodNullable<import("zod").ZodNumber>;
        type: import("zod").ZodEnum<["email", "phone", "web", "note", "sms", "chat", "fax", "twitter status", "twitter direct-message", "facebook feed post", "facebook feed comment", "telegram personal-message"]>;
        sender: import("zod").ZodEnum<["Agent", "Customer", "System"]>;
    }, import("zod").ZodTypeAny, "passthrough">>;
    /**
     * Create a new ticket
     * @param obj ticket object
     * @return Ticket that was created
     */
    create(obj: CreateArticleRequest): Promise<import("zod").objectInputType<{
        id: import("zod").ZodNumber;
        ticket_id: import("zod").ZodNumber;
        type_id: import("zod").ZodNumber;
        sender_id: import("zod").ZodNumber;
        from: import("zod").ZodNullable<import("zod").ZodString>;
        to: import("zod").ZodNullable<import("zod").ZodString>;
        cc: import("zod").ZodNullable<import("zod").ZodString>;
        subject: import("zod").ZodNullable<import("zod").ZodString>;
        reply_to: import("zod").ZodNullable<import("zod").ZodString>;
        message_id: import("zod").ZodNullable<import("zod").ZodNumber>;
        content_type: import("zod").ZodEnum<["text/html", "text/plain"]>;
        body: import("zod").ZodString;
        internal: import("zod").ZodBoolean;
        created_by_id: import("zod").ZodNumber;
        created_by: import("zod").ZodString;
        created_at: import("zod").ZodString;
        updated_by_id: import("zod").ZodNullable<import("zod").ZodNumber>;
        updated_by: import("zod").ZodNullable<import("zod").ZodString>;
        updated_at: import("zod").ZodString;
        origin_by_id: import("zod").ZodNullable<import("zod").ZodNumber>;
        type: import("zod").ZodEnum<["email", "phone", "web", "note", "sms", "chat", "fax", "twitter status", "twitter direct-message", "facebook feed post", "facebook feed comment", "telegram personal-message"]>;
        sender: import("zod").ZodEnum<["Agent", "Customer", "System"]>;
    }, import("zod").ZodTypeAny, "passthrough">>;
}
//# sourceMappingURL=ArticleClient.d.ts.map