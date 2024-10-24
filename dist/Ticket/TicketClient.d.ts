/**
 * Ticket object
 * @author Peter Kappelt
 */
import ZammadClient from "../Client/Client.js";
import { ExpandParams, OnBehalfParams, PaginationParams } from "../Client/Parameter.js";
import { CreateTicketInput, ApiTicket, ExpandedApiTicket, UpdateTicketInput } from "./TicketType.js";
export default class TicketClient {
    constructor(api: ZammadClient);
    private _api;
    private _val;
    /**
     * Gets all tickets that the authenticated user can view
     * @param params Request options
     */
    getAll<T extends boolean = false>(params?: PaginationParams & OnBehalfParams & ExpandParams<T>): Promise<T extends true ? ExpandedApiTicket[] : ApiTicket[]>;
    /**
     * Get a ticket by its id
     * @param id of ticket to get
     * @param params for get endpoint
     */
    getById<T extends boolean = false>(id: number, params?: OnBehalfParams & ExpandParams<T>): Promise<T extends true ? ExpandedApiTicket : ApiTicket>;
    /**
     * Create a new ticket
     * @param obj ticket object
     * @return Ticket that was created
     */
    create<T extends boolean = false>(obj: CreateTicketInput): Promise<{
        number: string;
        id: number;
        organization_id: number | null;
        note: string | null;
        created_by_id: number;
        created_at: string;
        updated_by_id: number | null;
        updated_at: string;
        group_id: number;
        priority_id: number;
        state_id: number | null;
        title: string;
        owner_id: number | null;
        customer_id: number | null;
        first_response_at: string | null;
        first_response_escalation_at: string | null;
        first_response_in_min: number | null;
        first_response_diff_in_min: number | null;
        close_at: string | null;
        close_escalation_at: string | null;
        close_in_min: number | null;
        close_diff_in_min: number | null;
        update_escalation_at: string | null;
        update_in_min: number | null;
        update_diff_in_min: number | null;
        last_contact_at: string | null;
        last_contact_agent_at: string | null;
        last_contact_customer_at: string | null;
        last_owner_update_at: string | null;
        create_article_type_id: number;
        create_article_sender_id: number;
        article_count: number;
        escalation_at: string | null;
    }>;
    /**
     * Push the changes of the current ticket
     * @param {} update Properties to update, can include properties no on api ticket object
     */
    update(id: number, update: UpdateTicketInput): Promise<{
        number: string;
        id: number;
        organization_id: number | null;
        note: string | null;
        created_by_id: number;
        created_at: string;
        updated_by_id: number | null;
        updated_at: string;
        group_id: number;
        priority_id: number;
        state_id: number | null;
        title: string;
        owner_id: number | null;
        customer_id: number | null;
        first_response_at: string | null;
        first_response_escalation_at: string | null;
        first_response_in_min: number | null;
        first_response_diff_in_min: number | null;
        close_at: string | null;
        close_escalation_at: string | null;
        close_in_min: number | null;
        close_diff_in_min: number | null;
        update_escalation_at: string | null;
        update_in_min: number | null;
        update_diff_in_min: number | null;
        last_contact_at: string | null;
        last_contact_agent_at: string | null;
        last_contact_customer_at: string | null;
        last_owner_update_at: string | null;
        create_article_type_id: number;
        create_article_sender_id: number;
        article_count: number;
        escalation_at: string | null;
    }>;
    /**
     * Delete the current ticket on remote
     * @param id of ticket to delete
     */
    delete(id: number): Promise<void>;
}
//# sourceMappingURL=TicketClient.d.ts.map