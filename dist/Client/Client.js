/**
 * ZammadApi top level and helper functions
 * @author Peter Kappelt
 */
import Axios from "axios";
import { API_PREFIX } from "./ApiString.js";
import { UnexpectedResponse } from "./ApiError.js";
import TicketClient from "../Ticket/TicketClient.js";
import UserClient from "../User/UserClient.js";
import ArticleClient from "../Article/ArticleClient.js";
import StateClient from "../State/StateClient.js";
export default class ZammadClient {
    /**
     * Connect to a zammad API
     * @param host Hostname of Zammad instance with protocol and port
     * @param auth authorization credentials, token, or beare
     * @param options client options
     * @todo hostname check and sanitising
     */
    constructor(host, auth, { userAgent = "Zammad JS Client" } = {}) {
        this.host = host;
        this.username = auth.username;
        this.password = auth.password;
        this.token = auth.token;
        this.bearer = auth.bearer;
        let authHeader;
        let authObj;
        if (this.token) {
            authHeader = `Token: ${this.token}`;
            this.authMode = "token";
        }
        else if (this.bearer) {
            authHeader = `Bearer: ${this.bearer}`;
            this.authMode = "bearer";
        }
        else if (this.username && this.password) {
            authObj = {
                username: this.username,
                password: this.password,
            };
            this.authMode = "basic";
        }
        else {
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
        // this.httpClient.interceptors.request.use(
        //   (r) => {console.log(r);return r},
        // );
        this.httpClient.interceptors.response.use(undefined, (e) => {
            console.log(e.toJSON());
            throw new UnexpectedResponse("Unexpected response code", "200/201", e.status);
        });
        this.ticket = new TicketClient(this);
        this.user = new UserClient(this);
        this.article = new ArticleClient(this);
        this.state = new StateClient(this);
    }
    host;
    username;
    password;
    token;
    bearer;
    authMode;
    httpClient;
    /**
     * Perform a get call on a given endpoint, return result
     * @param endpoint Endpoint to call
     * @param params associative array in form "param": "value"
     */
    async doGetCall(endpoint, params = {}) {
        let response = await this.httpClient.get(endpoint, { params });
        return response.data;
    }
    /**
     * Perform a post call on a given endpoint, return result
     * @param endpoint Endpoint to call
     * @param body Body of the request
     * @param params associative array in form "param": "value"
     */
    async doPostCall(endpoint, body, params = {}) {
        let response = await this.httpClient.post(endpoint, body, { params });
        return response.data;
    }
    /**
     * Perform a put call on a given endpoint, return result
     * @param endpoint Endpoint to call
     * @param body Body of the request
     * @param params associative array in form "param": "value"
     */
    async doPutCall(endpoint, body, params) {
        let response = await this.httpClient.put(endpoint, body, params ? { params } : undefined);
        return response.data;
    }
    /**
     * Perform a delete call on a given endpoint, return result
     * @param endpoint Endpoint to call
     * @param params associative array in form "param": "value"
     */
    async doDeleteCall(endpoint, params = {}) {
        let response = await this.httpClient.delete(endpoint, { params });
        return response.data;
    }
    ticket;
    user;
    article;
    state;
}
