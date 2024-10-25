/**
 * ZammadApi top level and helper functions
 * @author Peter Kappelt
 */

import Axios from "axios";
import { API_PREFIX } from "./ApiString.js";
import { UnexpectedResponse } from "./ApiError.js";
import { GenericParams } from "./Parameter.js";
import TicketClient, { TicketParameters } from "../Ticket/TicketClient.js";
import { AuthParams } from "./ClientType.js";
import UserClient from "../User/UserClient.js";
import ArticleClient from "../Article/ArticleClient.js";
import StateClient from "../State/StateClient.js";

export type HttpClient = ReturnType<typeof Axios.create>;
type HttpClientBody = object;

type ClientParameters = { Ticket?: TicketParameters };

export default class ZammadClient<T extends ClientParameters = {}> {
  /**
   * Connect to a zammad API
   * @param host Hostname of Zammad instance with protocol and port
   * @param auth authorization credentials, token, or beare
   * @param options client options
   * @todo hostname check and sanitising
   */
  constructor(
    host: string,
    auth: AuthParams,
    {
      userAgent = "Zammad JS Client",
    }: {
      userAgent?: string;
      Ticket?: {
        [K in keyof NonNullable<T["Ticket"]>["extensions"]]: {
          type: NonNullable<T["Ticket"]>["extensions"][K] extends string
            ? "string"
            : "number";
        };
      };
    } = {}
  ) {
    this.host = host;

    this.username = auth.username;
    this.password = auth.password;
    this.token = auth.token;
    this.bearer = auth.bearer;

    let authHeader: string | undefined;
    let authObj: { username: string; password: string } | undefined;

    if (this.token) {
      authHeader = `Token: ${this.token}`;
      this.authMode = "token";
    } else if (this.bearer) {
      authHeader = `Bearer: ${this.bearer}`;
      this.authMode = "bearer";
    } else if (this.username && this.password) {
      authObj = {
        username: this.username,
        password: this.password,
      };
      this.authMode = "basic";
    } else {
      this.authMode = "none";
    }

    this.httpClient = Axios.create({
      baseURL: this.host + API_PREFIX,
      auth: authObj,
      headers: {
        "User-Agent": userAgent,
        Authorization: authHeader,
      },
      validateStatus: (status) => status === 200 || status === 201,
    });

    // this.httpClient.interceptors.request.use( (r) => {
    //   console.log(r);
    //   return r;
    // });

    this.httpClient.interceptors.response.use(undefined, (e) => {
      // console.log(e.toJSON());
      throw new UnexpectedResponse(
        "Unexpected response code",
        "200/201",
        e.status
      );
    });

    this.ticket = new TicketClient(this);
    this.user = new UserClient(this);
    this.article = new ArticleClient(this);
    this.state = new StateClient(this);
  }

  host: string;
  username?: string;
  password?: string;
  token?: string;
  bearer?: string;
  authMode: "basic" | "token" | "bearer" | "none";
  httpClient: HttpClient;

  /**
   * Perform a get call on a given endpoint, return result
   * @param endpoint Endpoint to call
   * @param params associative array in form "param": "value"
   */
  async doGetCall(endpoint: string, params: GenericParams = {}) {
    const response = await this.httpClient.get(endpoint, { params });
    return response.data;
  }

  /**
   * Perform a post call on a given endpoint, return result
   * @param endpoint Endpoint to call
   * @param body Body of the request
   * @param params associative array in form "param": "value"
   */
  async doPostCall(
    endpoint: string,
    body: HttpClientBody,
    params: GenericParams = {}
  ) {
    const response = await this.httpClient.post(endpoint, body, { params });
    return response.data;
  }

  /**
   * Perform a put call on a given endpoint, return result
   * @param endpoint Endpoint to call
   * @param body Body of the request
   * @param params associative array in form "param": "value"
   */
  async doPutCall(
    endpoint: string,
    body: HttpClientBody,
    params?: GenericParams
  ) {
    const response = await this.httpClient.put(
      endpoint,
      body,
      params ? { params } : undefined
    );
    return response.data;
  }

  /**
   * Perform a delete call on a given endpoint, return result
   * @param endpoint Endpoint to call
   * @param params associative array in form "param": "value"
   */
  async doDeleteCall(endpoint: string, params: GenericParams = {}) {
    const response = await this.httpClient.delete(endpoint, { params });
    return response.data;
  }

  ticket: TicketClient<T["Ticket"]>;
  user: UserClient;
  article: ArticleClient;
  state: StateClient;
}
