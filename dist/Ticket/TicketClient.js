/**
 * Ticket object
 * @author Peter Kappelt
 */
import { ENDPOINTS, PARAMS } from "../Client/ApiString.js";
import { UnexpectedResponse } from "../Client/ApiError.js";
import { TicketValidator } from "./TicketValidator.js";
export default class TicketClient {
    constructor(client) {
        this._client = client;
    }
    _client;
    _val = new TicketValidator();
    /**
     * Gets all tickets that the authenticated user can view
     * @param params Request options
     */
    async getAll(params) {
        let response = await this._client.doGetCall(ENDPOINTS.TICKET_LIST, params);
        if (!Array.isArray(response)) {
            throw new UnexpectedResponse("Invalid response (did not receive array)", "array", typeof response);
        }
        if (!params?.expand) {
            return response.map((obj) => this._val.apiTicket(obj));
        }
        else {
            return response.map((obj) => this._val.apiTicketExpanded(obj));
        }
    }
    /**
     * Get a ticket by its id
     * @param id of ticket to get
     * @param params for get endpoint
     */
    async getById(id, params) {
        let response;
        try {
            response = await this._client.doGetCall(ENDPOINTS.TICKET_SHOW + id, params);
        }
        catch (e) {
            if (e instanceof Object &&
                "response" in e &&
                e.response instanceof Object &&
                "status" in e.response &&
                e.response.status === 404) {
                return null;
            }
        }
        if (params?.expand)
            return this._val.apiTicketExpanded(response);
        return this._val.apiTicket(response);
    }
    // commented because not passing tests
    /**
     * Search for one or more tickets that match the given query
     * @param
     */
    async search(params) {
        const { query, ...rest } = params;
        let response = await this._client.doGetCall(ENDPOINTS.TICKET_SEARCH, {
            [PARAMS.TICKET_SEARCH_QUERY]: query,
            ...rest,
        });
        return this._val.apiTicketSearchResult(response);
    }
    /**
     * Create a new ticket
     * @param obj ticket object
     * @return Ticket that was created
     */
    async create(obj
    //  options?: ExpandParams
    ) {
        let res = await this._client.doPostCall(ENDPOINTS.TICKET_CREATE, obj);
        // if (options?.expand) return this._val.validateExpandedApiTicket(res);
        // else
        return this._val.apiTicket(res);
    }
    /**
     * Push the changes of the current ticket
     * @param {} update Properties to update, can include properties no on api ticket object
     */
    async update(id, update
    // params: ExpandParams
    ) {
        const res = await this._client.doPutCall(ENDPOINTS.TICKET_UPDATE + id, update);
        return this._val.apiTicket(res);
    }
    /**
     * Delete the current ticket on remote
     * @param id of ticket to delete
     */
    async delete(id) {
        await this._client.doDeleteCall(ENDPOINTS.TICKET_DELETE + id);
        return;
    }
}
