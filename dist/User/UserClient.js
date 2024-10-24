import { ENDPOINTS, PARAMS } from "../Client/ApiString.js";
import { UnexpectedResponse } from "../Client/ApiError.js";
import { UserValidator } from "./UserValidator.js";
export default class UserClient {
    constructor(api) {
        this._api = api;
    }
    _api;
    _val = UserValidator;
    /**
     * Gets all users that the authenticated user can view
     * @param params Request options
     */
    async getAll(params) {
        let response = await this._api.doGetCall(ENDPOINTS.USER_LIST, params);
        if (!Array.isArray(response)) {
            throw new UnexpectedResponse("Invalid response (not received array)", "array", typeof response);
        }
        if (params?.expand) {
            const a = response.map((obj) => this._val.apiUserExpanded(obj));
            return a;
        }
        return response.map((obj) => this._val.apiUser(obj));
    }
    /**
     * Get a user by its id
     * @param id of ticket to get
     * @param params for get endpoint
     */
    async getById(id, params) {
        let response = await this._api.doGetCall(ENDPOINTS.USER_SHOW + id, params);
        if (params?.expand)
            return this._val.apiUserExpanded(response);
        return this._val.apiUser(response);
    }
    /**
     * Get a currently logged in user
     * @param params for get endpoint
     */
    async getMe(params) {
        let response = await this._api.doGetCall(ENDPOINTS.USER_CURRENT, params);
        if (params?.expand)
            return this._val.apiUserExpanded(response);
        return this._val.apiUser(response);
    }
    //commented because not passing tests
    /**
     * Search for one or more users that match the given query
     * @param
     */
    async search(params) {
        const { query, ...rest } = params;
        let response = await this._api.doGetCall(ENDPOINTS.USER_SEARCH, {
            [PARAMS.USER_SEARCH_QUERY]: query,
            ...rest,
        });
        console.log("USER RESPONSE", response);
        if (params?.expand)
            return this._val.apiUsersExtended(response);
        return this._val.apiUsers(response);
    }
    /**
     * Create a new user
     * @param obj ticket object
     * @return Ticket that was created
     */
    async create(obj
    //  options?: ExpandParams
    ) {
        let res = await this._api.doPostCall(ENDPOINTS.USER_CREATE, obj);
        // if (options?.expand) return this._val.validateExpandedApiTicket(res);
        // else
        return this._val.apiUser(res);
    }
    /**
     * Push the changes of the current ticket
     * @param {} update Properties to update, can include properties no on api ticket object
     */
    async update(id, update
    // params: ExpandParams
    ) {
        const res = await this._api.doPutCall(ENDPOINTS.USER_UPDATE + id, update);
        return this._val.apiUser(res);
    }
    /**
     * Delete ticket by id
     * @param id of user to delete
     */
    async delete(id) {
        await this._api.doDeleteCall(ENDPOINTS.USER_DELETE + id);
        return;
    }
}
