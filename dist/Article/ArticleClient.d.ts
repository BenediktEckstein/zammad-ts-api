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
    getAll(id: number, params?: PaginationParams & OnBehalfParams & SortParams): Promise<{
        id: number;
        created_by_id: number;
        created_at: string;
        updated_by_id: number | null;
        updated_at: string;
        type: "note" | "email" | "web" | "phone" | "fax" | "sms" | "chat" | "twitter status" | "twitter direct-message" | "facebook feed post" | "facebook feed comment" | "telegram personal-message";
        created_by: string;
        updated_by: string | null;
        ticket_id: number;
        type_id: number;
        sender_id: number;
        from: string | null;
        to: string | null;
        cc: string | null;
        subject: string | null;
        reply_to: string | null;
        message_id: number | null;
        content_type: "text/html" | "text/plain";
        body: string;
        internal: boolean;
        origin_by_id: number | null;
        sender: "Agent" | "Customer" | "System";
    }[]>;
    /**
     * Get an article by its id
     * @param id of article to get
     * @param params for get endpoint
     */
    getById(id: number, params?: OnBehalfParams): Promise<{
        id: number;
        created_by_id: number;
        created_at: string;
        updated_by_id: number | null;
        updated_at: string;
        type: "note" | "email" | "web" | "phone" | "fax" | "sms" | "chat" | "twitter status" | "twitter direct-message" | "facebook feed post" | "facebook feed comment" | "telegram personal-message";
        created_by: string;
        updated_by: string | null;
        ticket_id: number;
        type_id: number;
        sender_id: number;
        from: string | null;
        to: string | null;
        cc: string | null;
        subject: string | null;
        reply_to: string | null;
        message_id: number | null;
        content_type: "text/html" | "text/plain";
        body: string;
        internal: boolean;
        origin_by_id: number | null;
        sender: "Agent" | "Customer" | "System";
    }>;
    /**
     * Create a new ticket
     * @param obj ticket object
     * @return Ticket that was created
     */
    create(obj: CreateArticleRequest): Promise<{
        id: number;
        created_by_id: number;
        created_at: string;
        updated_by_id: number | null;
        updated_at: string;
        type: "note" | "email" | "web" | "phone" | "fax" | "sms" | "chat" | "twitter status" | "twitter direct-message" | "facebook feed post" | "facebook feed comment" | "telegram personal-message";
        created_by: string;
        updated_by: string | null;
        ticket_id: number;
        type_id: number;
        sender_id: number;
        from: string | null;
        to: string | null;
        cc: string | null;
        subject: string | null;
        reply_to: string | null;
        message_id: number | null;
        content_type: "text/html" | "text/plain";
        body: string;
        internal: boolean;
        origin_by_id: number | null;
        sender: "Agent" | "Customer" | "System";
    }>;
}
//# sourceMappingURL=ArticleClient.d.ts.map