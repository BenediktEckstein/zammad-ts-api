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
    getById(id: number, params?: OnBehalfParams): Promise<{
        id: number;
        note: string | null;
        active: boolean;
        created_by_id: number;
        created_at: string;
        updated_by_id: number | null;
        updated_at: string;
        state_type_id: number;
        next_state_id: number | null;
        name: string;
        ignore_escalation: boolean;
        default_create: boolean;
        default_follow_up: boolean;
    }>;
}
//# sourceMappingURL=StateClient.d.ts.map