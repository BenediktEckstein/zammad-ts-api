import { z } from "zod";
export declare const stateSchema: z.ZodObject<{
    id: z.ZodNumber;
    state_type_id: z.ZodNumber;
    next_state_id: z.ZodNullable<z.ZodNumber>;
    name: z.ZodString;
    note: z.ZodNullable<z.ZodString>;
    active: z.ZodBoolean;
    ignore_escalation: z.ZodBoolean;
    default_create: z.ZodBoolean;
    default_follow_up: z.ZodBoolean;
    updated_by_id: z.ZodNullable<z.ZodNumber>;
    created_by_id: z.ZodNumber;
    created_at: z.ZodString;
    updated_at: z.ZodString;
}, "strip", z.ZodTypeAny, {
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
}, {
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
export declare class StateValidator {
    static validateApiState: (data: any) => any;
}
//# sourceMappingURL=StateValidator.d.ts.map