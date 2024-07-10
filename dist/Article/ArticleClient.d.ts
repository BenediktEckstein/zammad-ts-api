import ZammadClient from "../Client/Client.js";
import { OnBehalfParams, PaginationParams, SortParams } from "../Client/Parameter.js";
import { CreateArticleRequest } from "./ArticleType.js";
export default class ArticleClient {
    constructor(api: ZammadClient);
    private _api;
    private _val;
    /**
     * Gets all articled that the authenticated user can view on a ticket
     * @param id id of the ticket
     * @param params Request options
     */
    getAll(id: number, params?: PaginationParams & OnBehalfParams & SortParams): Promise<any[]>;
    /**
     * Get an article by its id
     * @param id of article to get
     * @param params for get endpoint
     */
    getById(id: number, params?: OnBehalfParams): Promise<any>;
    /**
     * Create a new ticket
     * @param obj ticket object
     * @return Ticket that was created
     */
    create(obj: CreateArticleRequest): Promise<any>;
}
//# sourceMappingURL=ArticleClient.d.ts.map