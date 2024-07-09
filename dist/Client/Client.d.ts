/**
 * ZammadApi top level and helper functions
 * @author Peter Kappelt
 */
import Axios from "axios";
import { GenericParams } from "./Parameter.js";
import TicketClient from "../Ticket/TicketClient.js";
export type HttpClient = ReturnType<typeof Axios.create>;
type HttpClientBody = object;
export default class ZammadClient {
    /**
     * Connect to a zammad API
     * @param host Hostname of Zammad instance with protocol and port
     * @param username Username for authentication
     * @param password Password for authentication
     * @todo hostname check and sanitising
     */
    constructor(host: string, username: string, password: string);
    host: string;
    username: string;
    password: string;
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
    ticket: TicketClient;
}
export {};
//# sourceMappingURL=Client.d.ts.map