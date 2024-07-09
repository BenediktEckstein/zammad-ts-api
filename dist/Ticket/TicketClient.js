/**
 * Ticket object
 * @author Peter Kappelt
 */
import { ENDPOINTS, PARAMS } from "../Client/ApiString.js";
import { UnexpectedResponse } from "../Client/ApiError.js";
import { TicketValidator } from "./TicketValidator.js";
export default class TicketClient {
    constructor(api) {
        this._api = api;
    }
    _api;
    _val = TicketValidator;
    /**
     * Gets all tickets that the authenticated user can view
     * @param {{page?:number, perPage?:number}} params Request options
     */
    async getAll(params, expand) {
        let response = await this._api.doGetCall(ENDPOINTS.TICKET_LIST, {
            ...params,
            expand,
        });
        if (!Array.isArray(response)) {
            throw new UnexpectedResponse("Invalid response (not received array)", "array", typeof response);
        }
        if (!expand) {
            return response.map((obj) => this._val.validateApiTicket(obj));
        }
        else {
            return response.map((obj) => this._val.validateExpandedApiTicket(obj));
        }
    }
    /**
     * Get a ticket by its id
     * @param id of ticket to get
     * @param params for get endpoint
     */
    async getById(id, params) {
        let response = await this._api.doGetCall(ENDPOINTS.TICKET_SHOW + id, params);
        if (params?.expand)
            return this._val.validateExpandedApiTicket(response);
        return this._val.validateApiTicket(response);
    }
    /**
     * Search for one or more tickets that match the given query
     * @param
     */
    async search(params) {
        const { query, ...rest } = params;
        let response = await this._api.doGetCall(ENDPOINTS.TICKET_SEARCH, {
            [PARAMS.TICKET_SEARCH_QUERY]: query,
            ...rest,
        });
        return TicketValidator.validateApiTicketSearchResult(response);
    }
    /**
     * Create a new ticket
     * @param obj ticket object
  
     * @return Ticket that was created
     */
    async create(obj, options) {
        let res = await this._api.doPostCall(ENDPOINTS.TICKET_CREATE, obj, options);
        if (options?.expand)
            return this._val.validateExpandedApiTicket(res);
        else
            return this._val.validateApiTicket(res);
    }
    /**
     * Push the changes of the current ticket
     * @param {} update Properties to update, can include properties no on api ticket object
     */
    async update(id, update, params) {
        const res = await this._api.doPutCall(ENDPOINTS.TICKET_UPDATE + id, update, params);
        return this._val.validateApiTicket(res);
    }
    /**
     * Delete the current ticket on remote
     * @param id of ticket to delete
     */
    async delete(id) {
        return await this._api.doDeleteCall(ENDPOINTS.TICKET_DELETE + id);
    }
}
