import ZammadClient from "../Client/Client.js";
import {
  ExpandParams,
  OnBehalfParams,
  PaginationParams,
  SortParams,
} from "../Client/Parameter.js";
import { ENDPOINTS, PARAMS } from "../Client/ApiString.js";
import { UnexpectedResponse } from "../Client/ApiError.js";
import { UserValidator } from "./UserValidator.js";
import { ApiUser, CreateUserInput, ExpandedApiUser, UpdateUserInput } from "./UserType.js";
import { UserQueryParams } from "./UserParameter.js";


export default class UserClient {
  constructor(api: ZammadClient) {
    this._api = api;
  }

  private _api: ZammadClient;
  private _val = UserValidator;

  /**
   * Gets all users that the authenticated user can view
   * @param params Request options
   */
  async getAll<T extends boolean = false>(
    params?: PaginationParams & OnBehalfParams & ExpandParams<T>
  ): Promise<T extends true ? ExpandedApiUser[] : ApiUser[]> {
    let response = await this._api.doGetCall(ENDPOINTS.USER_LIST, params);

    if (!Array.isArray(response)) {
      throw new UnexpectedResponse(
        "Invalid response (not received array)",
        "array",
        typeof response
      );
    }

    if (params?.expand) {
      const a = response.map((obj) => this._val.validateExpandedApiUser(obj))
      return a
    }
      return response.map((obj) => this._val.validateApiUser(obj)) as any
    
  }

  /**
   * Get a user by its id
   * @param id of ticket to get
   * @param params for get endpoint
   */
  async getById<T extends boolean = false>(
    id: number,
    params?: OnBehalfParams & ExpandParams<T>
  ): Promise<T extends true ? ExpandedApiUser : ApiUser> {
    let response = await this._api.doGetCall(ENDPOINTS.USER_SHOW + id, params);
    if (params?.expand) return this._val.validateExpandedApiUser(response);
    return this._val.validateApiUser(response) as any
  }

  /**
   * Get a currently logged in user
   * @param params for get endpoint
   */
  async getMe<T extends boolean = false>(
    params?: OnBehalfParams & ExpandParams<T>
  ): Promise<T extends true ? ExpandedApiUser : ApiUser> {
    let response = await this._api.doGetCall(ENDPOINTS.USER_CURRENT, params);
    if (params?.expand) return this._val.validateExpandedApiUser(response);
    return this._val.validateApiUser(response) as any
  }

    //commented because not passing tests

  // /**
  //  * Search for one or more users that match the given query
  //  * @param
  //  */
  // async search<T extends boolean = false>(
  //   params: PaginationParams &
  //     SortParams &
  //     ExpandParams<T> &
  //     OnBehalfParams &
  //     UserQueryParams
  // ): Promise<T extends true ? ExpandedApiUser : ApiUser> {
  //   const { query, ...rest } = params;
  //   let response = await this._api.doGetCall(ENDPOINTS.USER_SEARCH, {
  //     [PARAMS.USER_SEARCH_QUERY]: query,
  //     ...rest,
  //   });
  //   if (params?.expand) return this._val.validateExpandedApiUser(response);
  //   return this._val.validateApiUser(response) as any
  // }

  /**
   * Create a new user
   * @param obj ticket object
   * @return Ticket that was created
   */
  async create(
    obj: CreateUserInput
    //  options?: ExpandParams
  ) {
    let res = await this._api.doPostCall(ENDPOINTS.USER_CREATE, obj);

    // if (options?.expand) return this._val.validateExpandedApiTicket(res);
    // else
    return this._val.validateApiUser(res);
  }

  /**
   * Push the changes of the current ticket
   * @param {} update Properties to update, can include properties no on api ticket object
   */
  async update(
    id: number,
    update: UpdateUserInput
    // params: ExpandParams
  ) {
    const res = await this._api.doPutCall(ENDPOINTS.USER_UPDATE + id, update);
    return this._val.validateApiUser(res);
  }

  /**
   * Delete ticket by id
   * @param id of user to delete
   */
  async delete(id: number) {
    await this._api.doDeleteCall(ENDPOINTS.USER_DELETE + id);
    return
  }
}
