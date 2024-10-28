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
  constructor(client: ZammadClient) {
    this._client = client;
  }

  private _client: ZammadClient;
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
    let response = await this._client.doGetCall(ENDPOINTS.TICKET_LIST, params);

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
      ? ExpandedApiTicket<E extends Object ? E["extensions"] : E> | null
      : ApiTicket<E extends Object ? E["extensions"] : E> | null
  >(id: number, params?: GetByIdParams<T>) {
    let response: unknown;
    try {
      response = await this._client.doGetCall(
        ENDPOINTS.TICKET_SHOW + id,
        params
      );
    } catch (e) {
      if (
        e instanceof Object &&
        "response" in e &&
        e.response instanceof Object &&
        "status" in e.response &&
        e.response.status === 404
      ) {
        return null;
      }
    }

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
  async create<R = ApiTicket<E extends Object ? E["extensions"] : E>>(
    obj: CreateTicketInput<E extends Object ? E["extensions"] : E>
    //  options?: ExpandParams
  ) {
    let res;

    res = await this._client.doPostCall(ENDPOINTS.TICKET_CREATE, obj);

    if (!(res instanceof Object)) {
      throw new Error("Ticket creation failed, null returned");
    }

    return this._val.apiTicket(res) as R;
  }

  /**
   * Push the changes of the current ticket
   * @param {} update Properties to update, can include properties no on api ticket object
   */
  async update<R = ApiTicket<E extends Object ? E["extensions"] : E> | null>(
    id: number,
    update: UpdateTicketInput<E extends Object ? E["extensions"] : E>
  ) {
    let res;
    try {
      res = await this._client.doPutCall(ENDPOINTS.TICKET_UPDATE + id, update);
    } catch (e) {
      if (
        e instanceof Object &&
        "response" in e &&
        e.response instanceof Object &&
        "status" in e.response &&
        e.response.status === 404
      ) {
        return null;
      }
    }

    return this._val.apiTicket(res) as R;
  }

  /**
   * Delete the current ticket on remote
   * @param id of ticket to delete
   */
  async delete(id: number) {
    await this._client.doDeleteCall(ENDPOINTS.TICKET_DELETE + id);
    return;
  }
}
