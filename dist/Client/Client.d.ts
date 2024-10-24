/**
 * ZammadApi top level and helper functions
 * @author Peter Kappelt
 */
import Axios from "axios";
import { GenericParams } from "./Parameter.js";
import TicketClient, { TicketParameters } from "../Ticket/TicketClient.js";
import { AuthParams } from "./ClientType.js";
import UserClient from "../User/UserClient.js";
import ArticleClient from "../Article/ArticleClient.js";
import StateClient from "../State/StateClient.js";
export type HttpClient = ReturnType<typeof Axios.create>;
type HttpClientBody = object;
type ClientParameters = {
    Ticket?: TicketParameters;
};
export default class ZammadClient<T extends ClientParameters = {}> {
    /**
     * Connect to a zammad API
     * @param host Hostname of Zammad instance with protocol and port
     * @param auth authorization credentials, token, or beare
     * @param options client options
     * @todo hostname check and sanitising
     */
    constructor(host: string, auth: AuthParams, { userAgent, }?: {
        userAgent?: string;
        Ticket?: {
            [K in keyof NonNullable<T["Ticket"]>["extensions"]]: {
                type: NonNullable<T["Ticket"]>["extensions"][K] extends string ? "string" : "number";
            };
        };
    });
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
    doGetCall(endpoint: string, params?: GenericParams): Promise<any>;
    /**
     * Perform a post call on a given endpoint, return result
     * @param endpoint Endpoint to call
     * @param body Body of the request
     * @param params associative array in form "param": "value"
     */
    doPostCall(endpoint: string, body: HttpClientBody, params?: GenericParams): Promise<any>;
    /**
     * Perform a put call on a given endpoint, return result
     * @param endpoint Endpoint to call
     * @param body Body of the request
     * @param params associative array in form "param": "value"
     */
    doPutCall(endpoint: string, body: HttpClientBody, params?: GenericParams): Promise<any>;
    /**
     * Perform a delete call on a given endpoint, return result
     * @param endpoint Endpoint to call
     * @param params associative array in form "param": "value"
     */
    doDeleteCall(endpoint: string, params?: GenericParams): Promise<any>;
    ticket: TicketClient<T["Ticket"]>;
    user: UserClient;
    article: ArticleClient;
    state: StateClient;
}
export {};
//# sourceMappingURL=Client.d.ts.map