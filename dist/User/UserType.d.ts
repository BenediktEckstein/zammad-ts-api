import { z } from "zod";
import { expandedUserSchema, userSchema } from "./UserValidator.js";
export type ApiUser = z.infer<typeof userSchema>;
export type ExpandedApiUser = z.infer<typeof expandedUserSchema>;
export type CreateUserInput = {
    firstname?: string;
    lastname?: string;
    email?: string;
    login?: string;
    organization?: string;
    roles?: string[];
};
export interface UpdateUserInput {
    firstname?: string;
    lastname?: string;
    email?: string;
    web?: string;
    phone?: string;
    fax?: string;
    mobile?: string;
    department?: string;
    address?: string;
    street?: string;
    zip?: string;
    city?: string;
    country?: string;
    vip?: boolean;
    active?: boolean;
    note?: string;
    role_ids?: number[];
}
//# sourceMappingURL=UserType.d.ts.map