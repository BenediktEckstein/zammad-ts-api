/**
 * Ticket object
 * @author Peter Kappelt
 */
import ZammadClient from "../Client/Client.js";
import { ExpandParams, OnBehalfParams, PaginationParams, SortParams } from "../Client/Parameter.js";
import { TicketQueryParams } from "./TicketParameter.js";
import { CreateTicketInput, ApiTicket, ExpandedApiTicket, UpdateTicketInput } from "./TicketType.js";
export default class TicketClient {
    constructor(api: ZammadClient);
    private _api;
    private _val;
    /**
     * Gets all tickets that the authenticated user can view
     * @param {{page?:number, perPage?:number}} params Request options
     */
    getAll<T extends boolean>(params: PaginationParams & OnBehalfParams, expand?: T): Promise<T extends true ? ExpandedApiTicket[] : ApiTicket[]>;
    /**
     * Get a ticket by its id
     * @param id of ticket to get
     * @param params for get endpoint
     */
    getById(id: number, params?: ExpandParams & OnBehalfParams): Promise<any>;
    /**
     * Search for one or more tickets that match the given query
     * @param
     */
    search(params: PaginationParams & SortParams & ExpandParams & OnBehalfParams & TicketQueryParams): Promise<any>;
    /**
     * Create a new ticket
     * @param obj ticket object
  
     * @return Ticket that was created
     */
    create(obj: CreateTicketInput, options?: ExpandParams): Promise<any>;
    /**
     * Push the changes of the current ticket
     * @param {} update Properties to update, can include properties no on api ticket object
     */
    update(id: number, update: UpdateTicketInput, params: ExpandParams): Promise<any>;
    /**
     * Delete the current ticket on remote
     * @param id of ticket to delete
     */
    delete(id: number): Promise<any>;
}
//# sourceMappingURL=TicketClient.d.ts.map