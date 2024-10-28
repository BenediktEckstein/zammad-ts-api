/**
 * Ticket object
 * @author Peter Kappelt
 */
import ZammadClient from "../Client/Client.js";
import { ExpandParams, OnBehalfParams, PaginationParams, SortParams } from "../Client/Parameter.js";
import { TicketQueryParams } from "./TicketParameter.js";
import { CreateTicketInput, ApiTicket, ExpandedApiTicket, UpdateTicketInput } from "./TicketType.js";
import { Expand } from "../Utility/@type.js";
export type TicketParameters = {
    extensions?: Record<string, string | number>;
};
type GetAllParams<T extends boolean> = Expand<PaginationParams & OnBehalfParams & ExpandParams<T>>;
type GetByIdParams<T extends boolean> = Expand<OnBehalfParams & ExpandParams<T>>;
type SearchParams = Expand<PaginationParams & SortParams & OnBehalfParams & TicketQueryParams>;
export default class TicketClient<E extends TicketParameters | undefined = {
    extensions: undefined;
}> {
    constructor(client: ZammadClient);
    private _client;
    private _val;
    /**
     * Gets all tickets that the authenticated user can view
     * @param params Request options
     */
    getAll<T extends boolean = false, R = T extends true ? ExpandedApiTicket<E extends Object ? E["extensions"] : E>[] : ApiTicket<E extends Object ? E["extensions"] : E>[]>(params?: GetAllParams<T>): Promise<R>;
    /**
     * Get a ticket by its id
     * @param id of ticket to get
     * @param params for get endpoint
     */
    getById<T extends boolean = false, R = T extends true ? ExpandedApiTicket<E extends Object ? E["extensions"] : E> | null : ApiTicket<E extends Object ? E["extensions"] : E> | null>(id: number, params?: GetByIdParams<T>): Promise<R | null>;
    /**
     * Search for one or more tickets that match the given query
     * @param
     */
    search<T extends boolean = false>(params: SearchParams): Promise<{
        [x: string]: unknown;
        assets: {
            Ticket?: Record<string, {
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
            }> | undefined;
            User?: Record<string, import("zod").objectInputType<{
                id: import("zod").ZodNumber;
                organization_id: import("zod").ZodNullable<import("zod").ZodNumber>;
                note: import("zod").ZodString;
                active: import("zod").ZodBoolean;
                login_failed: import("zod").ZodNumber;
                verified: import("zod").ZodBoolean;
                login: import("zod").ZodString;
                last_login: import("zod").ZodNullable<import("zod").ZodString>;
                firstname: import("zod").ZodString;
                lastname: import("zod").ZodString;
                email: import("zod").ZodString;
                image: import("zod").ZodNullable<import("zod").ZodString>;
                web: import("zod").ZodString;
                phone: import("zod").ZodString;
                fax: import("zod").ZodString;
                mobile: import("zod").ZodString;
                department: import("zod").ZodNullable<import("zod").ZodString>;
                street: import("zod").ZodString;
                zip: import("zod").ZodString;
                city: import("zod").ZodString;
                country: import("zod").ZodString;
                address: import("zod").ZodNullable<import("zod").ZodString>;
                vip: import("zod").ZodBoolean;
                out_of_office: import("zod").ZodBoolean;
                out_of_office_start_at: import("zod").ZodNullable<import("zod").ZodString>;
                out_of_office_end_at: import("zod").ZodNullable<import("zod").ZodString>;
                out_of_office_replacement_id: import("zod").ZodNullable<import("zod").ZodNumber>;
                created_by_id: import("zod").ZodNumber;
                created_at: import("zod").ZodString;
                updated_by_id: import("zod").ZodNullable<import("zod").ZodNumber>;
                updated_at: import("zod").ZodNullable<import("zod").ZodString>;
                role_ids: import("zod").ZodArray<import("zod").ZodNumber, "many">;
                organization_ids: import("zod").ZodArray<import("zod").ZodNumber, "many">;
                authorization_ids: import("zod").ZodArray<import("zod").ZodNumber, "many">;
            }, import("zod").ZodTypeAny, "passthrough">> | undefined;
        } & {
            [k: string]: unknown;
        };
        tickets?: number[] | undefined;
        tickets_count?: number | undefined;
    }>;
    /**
     * Create a new ticket
     * @param obj ticket object
     * @return Ticket that was created
     */
    create<R = ApiTicket<E extends Object ? E["extensions"] : E>>(obj: CreateTicketInput<E extends Object ? E["extensions"] : E>): Promise<R>;
    /**
     * Push the changes of the current ticket
     * @param {} update Properties to update, can include properties no on api ticket object
     */
    update<R = ApiTicket<E extends Object ? E["extensions"] : E> | null>(id: number, update: UpdateTicketInput<E extends Object ? E["extensions"] : E>): Promise<R | null>;
    /**
     * Delete the current ticket on remote
     * @param id of ticket to delete
     */
    delete(id: number): Promise<void>;
}
export {};
//# sourceMappingURL=TicketClient.d.ts.map