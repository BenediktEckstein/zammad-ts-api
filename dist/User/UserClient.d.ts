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
    search<T extends boolean = false>(params: PaginationParams & SortParams & ExpandParams<T> & OnBehalfParams & UserQueryParams): Promise<T extends true ? ExpandedApiUser : ApiUser>;
    /**
     * Create a new user
     * @param obj ticket object
     * @return Ticket that was created
     */
    create(obj: CreateUserInput): Promise<{
        id: number;
        organization_id: number | null;
        note: string;
        active: boolean;
        login_failed: number;
        verified: boolean;
        login: string;
        last_login: string | null;
        firstname: string;
        lastname: string;
        email: string;
        image: string | null;
        web: string;
        phone: string;
        fax: string;
        mobile: string;
        department: string | null;
        street: string;
        zip: string;
        city: string;
        country: string;
        address: string | null;
        vip: boolean;
        out_of_office: boolean;
        out_of_office_start_at: string | null;
        out_of_office_end_at: string | null;
        out_of_office_replacement_id: number | null;
        created_by_id: number;
        created_at: string;
        updated_by_id: number | null;
        updated_at: string | null;
        role_ids: number[];
        organization_ids: number[];
        authorization_ids: number[];
    }>;
    /**
     * Push the changes of the current ticket
     * @param {} update Properties to update, can include properties no on api ticket object
     */
    update(id: number, update: UpdateUserInput): Promise<{
        id: number;
        organization_id: number | null;
        note: string;
        active: boolean;
        login_failed: number;
        verified: boolean;
        login: string;
        last_login: string | null;
        firstname: string;
        lastname: string;
        email: string;
        image: string | null;
        web: string;
        phone: string;
        fax: string;
        mobile: string;
        department: string | null;
        street: string;
        zip: string;
        city: string;
        country: string;
        address: string | null;
        vip: boolean;
        out_of_office: boolean;
        out_of_office_start_at: string | null;
        out_of_office_end_at: string | null;
        out_of_office_replacement_id: number | null;
        created_by_id: number;
        created_at: string;
        updated_by_id: number | null;
        updated_at: string | null;
        role_ids: number[];
        organization_ids: number[];
        authorization_ids: number[];
    }>;
    /**
     * Delete ticket by id
     * @param id of user to delete
     */
    delete(id: number): Promise<void>;
}
//# sourceMappingURL=UserClient.d.ts.map