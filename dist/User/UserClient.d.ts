import ZammadClient from "../Client/Client.js";
import { ExpandParams, OnBehalfParams, PaginationParams, SortParams } from "../Client/Parameter.js";
import { ApiUser, CreateUserInput, ExpandedApiUser, UpdateUserInput } from "./UserType.js";
import { UserQueryParams } from "./UserParameter.js";
export default class UserClient {
    constructor(api: ZammadClient);
    private _api;
    private _val;
    /**
     * Gets all users that the authenticated user can view
     * @param params Request options
     */
    getAll<T extends boolean = false>(params?: PaginationParams & OnBehalfParams & ExpandParams<T>): Promise<T extends true ? ExpandedApiUser[] : ApiUser[]>;
    /**
     * Get a user by its id
     * @param id of ticket to get
     * @param params for get endpoint
     */
    getById<T extends boolean = false>(id: number, params?: OnBehalfParams & ExpandParams<T>): Promise<T extends true ? ExpandedApiUser : ApiUser>;
    /**
     * Get a currently logged in user
     * @param params for get endpoint
     */
    getMe<T extends boolean = false>(params?: OnBehalfParams & ExpandParams<T>): Promise<T extends true ? ExpandedApiUser : ApiUser>;
    /**
     * Search for one or more users that match the given query
     * @param
     */
    search<T extends boolean = false>(params: PaginationParams & SortParams & ExpandParams<T> & OnBehalfParams & UserQueryParams): Promise<T extends true ? ExpandedApiUser[] : ApiUser[]>;
    /**
     * Create a new user
     * @param obj ticket object
     * @return Ticket that was created
     */
    create(obj: CreateUserInput): Promise<import("zod").objectInputType<{
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
    }, import("zod").ZodTypeAny, "passthrough">>;
    /**
     * Push the changes of the current ticket
     * @param {} update Properties to update, can include properties no on api ticket object
     */
    update(id: number, update: UpdateUserInput): Promise<import("zod").objectInputType<{
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
    }, import("zod").ZodTypeAny, "passthrough">>;
    /**
     * Delete ticket by id
     * @param id of user to delete
     */
    delete(id: number): Promise<void>;
}
//# sourceMappingURL=UserClient.d.ts.map