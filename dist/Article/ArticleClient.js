import { ENDPOINTS } from "../Client/ApiString.js";
import { UnexpectedResponse } from "../Client/ApiError.js";
import { ArticleValidator } from "./ArticleValidator.js";
export default class ArticleClient {
    constructor(api) {
        this._api = api;
    }
    _api;
    _val = ArticleValidator;
    /**
     * Gets all articled that the authenticated user can view on a ticket
     * @param id id of the ticket
     * @param params Request options
     */
    async getAll(id, params) {
        let response = await this._api.doGetCall(ENDPOINTS.TICKET_ARTICLE_BY_TICKET + id, params);
        if (!Array.isArray(response)) {
            throw new UnexpectedResponse("Invalid response (not received array)", "array", typeof response);
        }
        return response.map((obj) => this._val.validateApiArticle(obj));
    }
    /**
     * Get an article by its id
     * @param id of article to get
     * @param params for get endpoint
     */
    async getById(id, params) {
        let response = await this._api.doGetCall(ENDPOINTS.TICKET_ARTICLE_SHOW + id, params);
        return this._val.validateApiArticle(response);
    }
    /**
     * Create a new ticket
     * @param obj ticket object
     * @return Ticket that was created
     */
    async create(obj) {
        let res = await this._api.doPostCall(ENDPOINTS.TICKET_ARTICLE_CREATE, obj);
        return this._val.validateApiArticle(res);
    }
}
