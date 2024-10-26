import ZammadClient from "../Client/Client.js";
export type TicketParameters = {
    extensions?: Record<string, string | number>;
};
export default class TicketOverviewClient {
    constructor(client: ZammadClient);
    private _client;
    private _val;
    /**
     * Gets all tickets that the authenticated user can view
     * @param params Request options
     */
    getAll(): Promise<import("zod").objectInputType<{
        id: import("zod").ZodNumber;
        name: import("zod").ZodString;
        prio: import("zod").ZodNumber;
        link: import("zod").ZodString;
        count: import("zod").ZodNumber;
    }, import("zod").ZodTypeAny, "passthrough">[]>;
    /**
     * Get a ticket by its id
     * @param id of ticket to get
     * @param params for get endpoint
     */
    getByLink(link: string): Promise<{
        [x: string]: unknown;
        assets: {
            Ticket?: Record<string, import("zod").objectInputType<{
                id: import("zod").ZodNumber;
                group_id: import("zod").ZodNumber;
                priority_id: import("zod").ZodNumber;
                state_id: import("zod").ZodNullable<import("zod").ZodNumber>;
                organization_id: import("zod").ZodNullable<import("zod").ZodNumber>;
                number: import("zod").ZodString;
                title: import("zod").ZodString;
                owner_id: import("zod").ZodNullable<import("zod").ZodNumber>;
                customer_id: import("zod").ZodNullable<import("zod").ZodNumber>;
                note: import("zod").ZodNullable<import("zod").ZodString>;
                first_response_at: import("zod").ZodNullable<import("zod").ZodString>;
                first_response_escalation_at: import("zod").ZodNullable<import("zod").ZodString>;
                first_response_in_min: import("zod").ZodNullable<import("zod").ZodNumber>;
                first_response_diff_in_min: import("zod").ZodNullable<import("zod").ZodNumber>;
                close_at: import("zod").ZodNullable<import("zod").ZodString>;
                close_escalation_at: import("zod").ZodNullable<import("zod").ZodString>;
                close_in_min: import("zod").ZodNullable<import("zod").ZodNumber>;
                close_diff_in_min: import("zod").ZodNullable<import("zod").ZodNumber>;
                update_escalation_at: import("zod").ZodNullable<import("zod").ZodString>;
                update_in_min: import("zod").ZodNullable<import("zod").ZodNumber>;
                update_diff_in_min: import("zod").ZodNullable<import("zod").ZodNumber>;
                last_contact_at: import("zod").ZodNullable<import("zod").ZodString>;
                last_contact_agent_at: import("zod").ZodNullable<import("zod").ZodString>;
                last_contact_customer_at: import("zod").ZodNullable<import("zod").ZodString>;
                last_owner_update_at: import("zod").ZodNullable<import("zod").ZodString>;
                create_article_type_id: import("zod").ZodNumber;
                create_article_sender_id: import("zod").ZodNumber;
                article_count: import("zod").ZodNumber;
                escalation_at: import("zod").ZodNullable<import("zod").ZodString>;
                updated_by_id: import("zod").ZodNullable<import("zod").ZodNumber>;
                created_by_id: import("zod").ZodNumber;
                created_at: import("zod").ZodString;
                updated_at: import("zod").ZodString;
            }, import("zod").ZodTypeAny, "passthrough">> | undefined;
            User?: Record<string, import("zod").objectInputType<{}, import("zod").ZodTypeAny, "passthrough">> | undefined;
            Group?: Record<string, import("zod").objectInputType<{}, import("zod").ZodTypeAny, "passthrough">> | undefined;
            Overview?: Record<string, import("zod").objectInputType<{}, import("zod").ZodTypeAny, "passthrough">> | undefined;
            Role?: Record<string, import("zod").objectInputType<{}, import("zod").ZodTypeAny, "passthrough">> | undefined;
            TicketState?: Record<string, import("zod").objectInputType<{}, import("zod").ZodTypeAny, "passthrough">> | undefined;
        } & {
            [k: string]: unknown;
        };
    } | null>;
}
//# sourceMappingURL=TicketOverviewClient.d.ts.map