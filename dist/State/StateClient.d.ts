import ZammadClient from "../Client/Client.js";
import { OnBehalfParams, PaginationParams } from "../Client/Parameter.js";
import { ApiState } from "./StateType.js";
export default class StateClient {
    constructor(api: ZammadClient);
    private _api;
    private _val;
    /**
     * Gets all states that the authenticated user can view
     * @param params Request options
     */
    getAll(params?: PaginationParams & OnBehalfParams): Promise<ApiState[]>;
    /**
     * Get a ticket by its id
     * @param id of ticket to get
     * @param params for get endpoint
     */
    getById(id: number, params?: OnBehalfParams): Promise<any>;
}
//# sourceMappingURL=StateClient.d.ts.map