import ZammadClient from "../Client/Client.js";
import {
  OnBehalfParams,
  PaginationParams,
} from "../Client/Parameter.js";
import { ENDPOINTS } from "../Client/ApiString.js";
import { UnexpectedResponse } from "../Client/ApiError.js";
import {
  ApiState,
} from "./StateType.js";
import { StateValidator } from "./StateValidator.js";

export default class TicketClient {
  constructor(api: ZammadClient) {
    this._api = api;
  }

  private _api: ZammadClient;
  private _val = StateValidator;

  /**
   * Gets all states that the authenticated user can view
   * @param params Request options
   */
  async getAll(
    params?: PaginationParams & OnBehalfParams 
  ): Promise<ApiState[]> {
    let response = await this._api.doGetCall(ENDPOINTS.TICKET_STATE_LIST, {
      ...params,
    });

    if (!Array.isArray(response)) {
      throw new UnexpectedResponse(
        "Invalid response (not received array)",
        "array",
        typeof response
      );
    }
      return response.map((obj) => this._val.validateApiState(obj))
    
  }

  /**
   * Get a ticket by its id
   * @param id of ticket to get
   * @param params for get endpoint
   */
  async getById(id: number, params?: OnBehalfParams ){
    let response = await this._api.doGetCall(
      ENDPOINTS.TICKET_STATE_SHOW + id,
      params
    );
    return this._val.validateApiState(response);
  }
}
