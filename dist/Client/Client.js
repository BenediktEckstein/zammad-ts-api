/**
 * ZammadApi top level and helper functions
 * @author Peter Kappelt
 */
import Axios from "axios";
import { API_PREFIX } from "./ApiString.js";
import { UnexpectedResponse } from "./ApiError.js";
import TicketClient from "../Ticket/TicketClient.js";
export default class ZammadClient {
    /**
     * Connect to a zammad API
     * @param host Hostname of Zammad instance with protocol and port
     * @param username Username for authentication
     * @param password Password for authentication
     * @todo hostname check and sanitising
     */
    constructor(host, username, password) {
        this.host = host;
        this.username = username;
        this.password = password;
        this.httpClient = Axios.create({
            baseURL: this.host + API_PREFIX,
            auth: {
                username,
                password,
            },
            headers: {
                "User-Agent": "Zammad JS Client",
            },
            validateStatus: (status) => status === 200 || status === 201, //allow through all response codes. We deal with errors in interceptors (below)
        });
        this.httpClient.interceptors.response.use((r) => r, (e) => {
            console.log(e.toJSON());
            throw new UnexpectedResponse("Unexpected response code", "200/201", e.status);
        });
        this.ticket = new TicketClient(this);
    }
    host;
    username;
    password;
    httpClient;
    /**
     * Perform a get call on a given endpoint, return result
     * @param endpoint Endpoint to call
     * @param params associative array in form "param": "value"
     */
    async doGetCall(endpoint, params = {}) {
        let response = await this.httpClient.get(endpoint, {
            params,
        });
        return response.data;
    }
    /**
     * Perform a post call on a given endpoint, return result
     * @param endpoint Endpoint to call
     * @param body Body of the request
     * @param params associative array in form "param": "value"
     */
    async doPostCall(endpoint, body, params = {}) {
        let response = await this.httpClient.post(endpoint, { ...body, ...params }, params);
        return response.data;
    }
    /**
     * Perform a put call on a given endpoint, return result
     * @param endpoint Endpoint to call
     * @param body Body of the request
     * @param params associative array in form "param": "value"
     */
    async doPutCall(endpoint, body, params = {}) {
        let response = await this.httpClient.put(endpoint, { ...body, ...params }, params);
        return response.data;
    }
    /**
     * Perform a delete call on a given endpoint, return result
     * @param endpoint Endpoint to call
     * @param params associative array in form "param": "value"
     */
    async doDeleteCall(endpoint, params = {}) {
        let response = await this.httpClient.delete(endpoint, params);
        return response.data;
    }
    ticket;
}
