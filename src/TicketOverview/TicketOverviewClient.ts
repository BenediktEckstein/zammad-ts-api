import ZammadClient from "../Client/Client.js";
import { ENDPOINTS,  } from "../Client/ApiString.js";
import { TicketOverviewValidator } from "./TicketOverviewValidator.js";


export type TicketParameters = {
  extensions?: Record<string, string | number>;
};

export default class TicketOverviewClient {
  constructor(client: ZammadClient) {
    this._client = client;
  }

  private _client: ZammadClient;
  private _val = new TicketOverviewValidator();

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
  async getByLink(link: string) {
    let response: unknown;
    try {
      response = await this._client.doGetCall(ENDPOINTS.TICKET_OVERVIEWS, {
        view: link,
      });
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

    return this._val.ticketOverview(response)
  }

}
