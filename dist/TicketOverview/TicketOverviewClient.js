import { ENDPOINTS, } from "../Client/ApiString.js";
import { TicketOverviewValidator } from "./TicketOverviewValidator.js";
export default class TicketOverviewClient {
    constructor(client) {
        this._client = client;
    }
    _client;
    _val = new TicketOverviewValidator();
    /**
     * Gets all tickets that the authenticated user can view
     * @param params Request options
     */
    async getAll() {
        let response = await this._client.doGetCall(ENDPOINTS.TICKET_OVERVIEWS);
        return this._val.ticketOverviews(response);
    }
    /**
     * Get a ticket by its id
     * @param id of ticket to get
     * @param params for get endpoint
     */
    async getByLink(link) {
        let response;
        try {
            response = await this._client.doGetCall(ENDPOINTS.TICKET_OVERVIEWS, {
                view: link,
            });
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
        return this._val.ticketOverview(response);
    }
}
