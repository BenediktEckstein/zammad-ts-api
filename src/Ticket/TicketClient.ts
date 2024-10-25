/**
 * Ticket object
 * @author Peter Kappelt
 */

import ZammadClient from "../Client/Client.js";
import {
  ExpandParams,
  OnBehalfParams,
  PaginationParams,
  SortParams,
} from "../Client/Parameter.js";
import { ENDPOINTS, PARAMS } from "../Client/ApiString.js";
import { UnexpectedResponse } from "../Client/ApiError.js";
import { TicketValidator } from "./TicketValidator.js";
import { TicketQueryParams } from "./TicketParameter.js";
import {
  CreateTicketInput,
  ApiTicket,
  ExpandedApiTicket,
  UpdateTicketInput,
} from "./TicketType.js";
import { Expand } from "../Utility/@type.js";

export type TicketParameters = {
  extensions?: Record<string, string | number>;
};

type GetAllParams<T extends boolean> = Expand<
  PaginationParams & OnBehalfParams & ExpandParams<T>
>;
type GetByIdParams<T extends boolean> = Expand<
  OnBehalfParams & ExpandParams<T>
>;
type SearchParams = Expand<
  PaginationParams & SortParams & OnBehalfParams & TicketQueryParams
>;

export default class TicketClient<
  E extends TicketParameters | undefined = { extensions: undefined }
> {
  constructor(api: ZammadClient) {
    this._api = api;
  }

  private _api: ZammadClient;
  private _val = new TicketValidator();

  /**
   * Gets all tickets that the authenticated user can view
   * @param params Request options
   */
  async getAll<
    T extends boolean = false,
    R = T extends true
      ? ExpandedApiTicket<E extends Object ? E["extensions"] : E>[]
      : ApiTicket<E extends Object ? E["extensions"] : E>[]
  >(params?: GetAllParams<T>) {
    let response = await this._api.doGetCall(ENDPOINTS.TICKET_LIST, params);

    if (!Array.isArray(response)) {
      throw new UnexpectedResponse(
        "Invalid response (did not receive array)",
        "array",
        typeof response
      );
    }

    if (!params?.expand) {
      return response.map((obj) => this._val.apiTicket(obj)) as R;
    } else {
      return response.map((obj) => this._val.apiTicketExpanded(obj)) as R;
    }
  }

  /**
   * Get a ticket by its id
   * @param id of ticket to get
   * @param params for get endpoint
   */
  async getById<
    T extends boolean = false,
    R = T extends true
      ? ExpandedApiTicket<E extends Object ? E["extensions"] : E>
      : ApiTicket<E extends Object ? E["extensions"] : E>
  >(id: number, params?: GetByIdParams<T>) {
    let response = await this._api.doGetCall(
      ENDPOINTS.TICKET_SHOW + id,
      params
    );

    if (params?.expand) return this._val.apiTicketExpanded(response) as R;
    return this._val.apiTicket(response) as R;
  }

  // commented because not passing tests
  /**
   * Search for one or more tickets that match the given query
   * @param
   */
  async search<T extends boolean = false>(params: SearchParams) {
    const { query, ...rest } = params;
    let response = await this._api.doGetCall(ENDPOINTS.TICKET_SEARCH, {
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
  async create<T extends boolean = false>(
    obj: CreateTicketInput<E extends Object ? E["extensions"] : E>
    //  options?: ExpandParams
  ) {
    let res = await this._api.doPostCall(ENDPOINTS.TICKET_CREATE, obj);

    // if (options?.expand) return this._val.validateExpandedApiTicket(res);
    // else
    return this._val.apiTicket(res);
  }

  /**
   * Push the changes of the current ticket
   * @param {} update Properties to update, can include properties no on api ticket object
   */
  async update(
    id: number,
    update: UpdateTicketInput<E extends Object ? E["extensions"] : E>
    // params: ExpandParams
  ) {
    const res = await this._api.doPutCall(ENDPOINTS.TICKET_UPDATE + id, update);
    return this._val.apiTicket(res);
  }

  /**
   * Delete the current ticket on remote
   * @param id of ticket to delete
   */
  async delete(id: number) {
    await this._api.doDeleteCall(ENDPOINTS.TICKET_DELETE + id);
    return;
  }
}
