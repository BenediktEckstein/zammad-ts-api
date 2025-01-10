import { z } from "zod";
export declare const userSchema: z.ZodObject<{
    id: z.ZodNumber;
    organization_id: z.ZodNullable<z.ZodNumber>;
    note: z.ZodString;
    active: z.ZodBoolean;
    login_failed: z.ZodNumber;
    verified: z.ZodBoolean;
    login: z.ZodString;
    last_login: z.ZodNullable<z.ZodString>;
    firstname: z.ZodString;
    lastname: z.ZodString;
    email: z.ZodString;
    image: z.ZodNullable<z.ZodString>;
    web: z.ZodString;
    phone: z.ZodString;
    fax: z.ZodString;
    mobile: z.ZodString;
    department: z.ZodNullable<z.ZodString>;
    street: z.ZodString;
    zip: z.ZodString;
    city: z.ZodString;
    country: z.ZodString;
    address: z.ZodNullable<z.ZodString>;
    vip: z.ZodBoolean;
    out_of_office: z.ZodBoolean;
    out_of_office_start_at: z.ZodNullable<z.ZodString>;
    out_of_office_end_at: z.ZodNullable<z.ZodString>;
    out_of_office_replacement_id: z.ZodNullable<z.ZodNumber>;
    created_by_id: z.ZodNumber;
    created_at: z.ZodString;
    updated_by_id: z.ZodNullable<z.ZodNumber>;
    updated_at: z.ZodNullable<z.ZodString>;
    role_ids: z.ZodArray<z.ZodNumber, "many">;
    organization_ids: z.ZodArray<z.ZodNumber, "many">;
    authorization_ids: z.ZodArray<z.ZodNumber, "many">;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    id: z.ZodNumber;
    organization_id: z.ZodNullable<z.ZodNumber>;
    note: z.ZodString;
    active: z.ZodBoolean;
    login_failed: z.ZodNumber;
    verified: z.ZodBoolean;
    login: z.ZodString;
    last_login: z.ZodNullable<z.ZodString>;
    firstname: z.ZodString;
    lastname: z.ZodString;
    email: z.ZodString;
    image: z.ZodNullable<z.ZodString>;
    web: z.ZodString;
    phone: z.ZodString;
    fax: z.ZodString;
    mobile: z.ZodString;
    department: z.ZodNullable<z.ZodString>;
    street: z.ZodString;
    zip: z.ZodString;
    city: z.ZodString;
    country: z.ZodString;
    address: z.ZodNullable<z.ZodString>;
    vip: z.ZodBoolean;
    out_of_office: z.ZodBoolean;
    out_of_office_start_at: z.ZodNullable<z.ZodString>;
    out_of_office_end_at: z.ZodNullable<z.ZodString>;
    out_of_office_replacement_id: z.ZodNullable<z.ZodNumber>;
    created_by_id: z.ZodNumber;
    created_at: z.ZodString;
    updated_by_id: z.ZodNullable<z.ZodNumber>;
    updated_at: z.ZodNullable<z.ZodString>;
    role_ids: z.ZodArray<z.ZodNumber, "many">;
    organization_ids: z.ZodArray<z.ZodNumber, "many">;
    authorization_ids: z.ZodArray<z.ZodNumber, "many">;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    id: z.ZodNumber;
    organization_id: z.ZodNullable<z.ZodNumber>;
    note: z.ZodString;
    active: z.ZodBoolean;
    login_failed: z.ZodNumber;
    verified: z.ZodBoolean;
    login: z.ZodString;
    last_login: z.ZodNullable<z.ZodString>;
    firstname: z.ZodString;
    lastname: z.ZodString;
    email: z.ZodString;
    image: z.ZodNullable<z.ZodString>;
    web: z.ZodString;
    phone: z.ZodString;
    fax: z.ZodString;
    mobile: z.ZodString;
    department: z.ZodNullable<z.ZodString>;
    street: z.ZodString;
    zip: z.ZodString;
    city: z.ZodString;
    country: z.ZodString;
    address: z.ZodNullable<z.ZodString>;
    vip: z.ZodBoolean;
    out_of_office: z.ZodBoolean;
    out_of_office_start_at: z.ZodNullable<z.ZodString>;
    out_of_office_end_at: z.ZodNullable<z.ZodString>;
    out_of_office_replacement_id: z.ZodNullable<z.ZodNumber>;
    created_by_id: z.ZodNumber;
    created_at: z.ZodString;
    updated_by_id: z.ZodNullable<z.ZodNumber>;
    updated_at: z.ZodNullable<z.ZodString>;
    role_ids: z.ZodArray<z.ZodNumber, "many">;
    organization_ids: z.ZodArray<z.ZodNumber, "many">;
    authorization_ids: z.ZodArray<z.ZodNumber, "many">;
}, z.ZodTypeAny, "passthrough">>;
export declare const expandedUserSchema: z.ZodObject<z.objectUtil.extendShape<{
    id: z.ZodNumber;
    organization_id: z.ZodNullable<z.ZodNumber>;
    note: z.ZodString;
    active: z.ZodBoolean;
    login_failed: z.ZodNumber;
    verified: z.ZodBoolean;
    login: z.ZodString;
    last_login: z.ZodNullable<z.ZodString>;
    firstname: z.ZodString;
    lastname: z.ZodString;
    email: z.ZodString;
    image: z.ZodNullable<z.ZodString>;
    web: z.ZodString;
    phone: z.ZodString;
    fax: z.ZodString;
    mobile: z.ZodString;
    department: z.ZodNullable<z.ZodString>;
    street: z.ZodString;
    zip: z.ZodString;
    city: z.ZodString;
    country: z.ZodString;
    address: z.ZodNullable<z.ZodString>;
    vip: z.ZodBoolean;
    out_of_office: z.ZodBoolean;
    out_of_office_start_at: z.ZodNullable<z.ZodString>;
    out_of_office_end_at: z.ZodNullable<z.ZodString>;
    out_of_office_replacement_id: z.ZodNullable<z.ZodNumber>;
    created_by_id: z.ZodNumber;
    created_at: z.ZodString;
    updated_by_id: z.ZodNullable<z.ZodNumber>;
    updated_at: z.ZodNullable<z.ZodString>;
    role_ids: z.ZodArray<z.ZodNumber, "many">;
    organization_ids: z.ZodArray<z.ZodNumber, "many">;
    authorization_ids: z.ZodArray<z.ZodNumber, "many">;
}, {
    roles: z.ZodArray<z.ZodString, "many">;
    organizations: z.ZodArray<z.ZodString, "many">;
    authorizations: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    created_by: z.ZodString;
    updated_by: z.ZodString;
}>, "passthrough", z.ZodTypeAny, z.objectOutputType<z.objectUtil.extendShape<{
    id: z.ZodNumber;
    organization_id: z.ZodNullable<z.ZodNumber>;
    note: z.ZodString;
    active: z.ZodBoolean;
    login_failed: z.ZodNumber;
    verified: z.ZodBoolean;
    login: z.ZodString;
    last_login: z.ZodNullable<z.ZodString>;
    firstname: z.ZodString;
    lastname: z.ZodString;
    email: z.ZodString;
    image: z.ZodNullable<z.ZodString>;
    web: z.ZodString;
    phone: z.ZodString;
    fax: z.ZodString;
    mobile: z.ZodString;
    department: z.ZodNullable<z.ZodString>;
    street: z.ZodString;
    zip: z.ZodString;
    city: z.ZodString;
    country: z.ZodString;
    address: z.ZodNullable<z.ZodString>;
    vip: z.ZodBoolean;
    out_of_office: z.ZodBoolean;
    out_of_office_start_at: z.ZodNullable<z.ZodString>;
    out_of_office_end_at: z.ZodNullable<z.ZodString>;
    out_of_office_replacement_id: z.ZodNullable<z.ZodNumber>;
    created_by_id: z.ZodNumber;
    created_at: z.ZodString;
    updated_by_id: z.ZodNullable<z.ZodNumber>;
    updated_at: z.ZodNullable<z.ZodString>;
    role_ids: z.ZodArray<z.ZodNumber, "many">;
    organization_ids: z.ZodArray<z.ZodNumber, "many">;
    authorization_ids: z.ZodArray<z.ZodNumber, "many">;
}, {
    roles: z.ZodArray<z.ZodString, "many">;
    organizations: z.ZodArray<z.ZodString, "many">;
    authorizations: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    created_by: z.ZodString;
    updated_by: z.ZodString;
}>, z.ZodTypeAny, "passthrough">, z.objectInputType<z.objectUtil.extendShape<{
    id: z.ZodNumber;
    organization_id: z.ZodNullable<z.ZodNumber>;
    note: z.ZodString;
    active: z.ZodBoolean;
    login_failed: z.ZodNumber;
    verified: z.ZodBoolean;
    login: z.ZodString;
    last_login: z.ZodNullable<z.ZodString>;
    firstname: z.ZodString;
    lastname: z.ZodString;
    email: z.ZodString;
    image: z.ZodNullable<z.ZodString>;
    web: z.ZodString;
    phone: z.ZodString;
    fax: z.ZodString;
    mobile: z.ZodString;
    department: z.ZodNullable<z.ZodString>;
    street: z.ZodString;
    zip: z.ZodString;
    city: z.ZodString;
    country: z.ZodString;
    address: z.ZodNullable<z.ZodString>;
    vip: z.ZodBoolean;
    out_of_office: z.ZodBoolean;
    out_of_office_start_at: z.ZodNullable<z.ZodString>;
    out_of_office_end_at: z.ZodNullable<z.ZodString>;
    out_of_office_replacement_id: z.ZodNullable<z.ZodNumber>;
    created_by_id: z.ZodNumber;
    created_at: z.ZodString;
    updated_by_id: z.ZodNullable<z.ZodNumber>;
    updated_at: z.ZodNullable<z.ZodString>;
    role_ids: z.ZodArray<z.ZodNumber, "many">;
    organization_ids: z.ZodArray<z.ZodNumber, "many">;
    authorization_ids: z.ZodArray<z.ZodNumber, "many">;
}, {
    roles: z.ZodArray<z.ZodString, "many">;
    organizations: z.ZodArray<z.ZodString, "many">;
    authorizations: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    created_by: z.ZodString;
    updated_by: z.ZodString;
}>, z.ZodTypeAny, "passthrough">>;
export declare class UserValidator {
    static apiUser: (data: any) => import("../Utility/@type.js").Expand<z.objectInputType<{
        id: z.ZodNumber;
        organization_id: z.ZodNullable<z.ZodNumber>;
        note: z.ZodString;
        active: z.ZodBoolean;
        login_failed: z.ZodNumber;
        verified: z.ZodBoolean;
        login: z.ZodString;
        last_login: z.ZodNullable<z.ZodString>;
        firstname: z.ZodString;
        lastname: z.ZodString;
        email: z.ZodString;
        image: z.ZodNullable<z.ZodString>;
        web: z.ZodString;
        phone: z.ZodString;
        fax: z.ZodString;
        mobile: z.ZodString;
        department: z.ZodNullable<z.ZodString>;
        street: z.ZodString;
        zip: z.ZodString;
        city: z.ZodString;
        country: z.ZodString;
        address: z.ZodNullable<z.ZodString>;
        vip: z.ZodBoolean;
        out_of_office: z.ZodBoolean;
        out_of_office_start_at: z.ZodNullable<z.ZodString>;
        out_of_office_end_at: z.ZodNullable<z.ZodString>;
        out_of_office_replacement_id: z.ZodNullable<z.ZodNumber>;
        created_by_id: z.ZodNumber;
        created_at: z.ZodString;
        updated_by_id: z.ZodNullable<z.ZodNumber>;
        updated_at: z.ZodNullable<z.ZodString>;
        role_ids: z.ZodArray<z.ZodNumber, "many">;
        organization_ids: z.ZodArray<z.ZodNumber, "many">;
        authorization_ids: z.ZodArray<z.ZodNumber, "many">;
    }, z.ZodTypeAny, "passthrough">>;
    static apiUserExpanded: (data: any) => import("../Utility/@type.js").Expand<z.objectInputType<z.objectUtil.extendShape<{
        id: z.ZodNumber;
        organization_id: z.ZodNullable<z.ZodNumber>;
        note: z.ZodString;
        active: z.ZodBoolean;
        login_failed: z.ZodNumber;
        verified: z.ZodBoolean;
        login: z.ZodString;
        last_login: z.ZodNullable<z.ZodString>;
        firstname: z.ZodString;
        lastname: z.ZodString;
        email: z.ZodString;
        image: z.ZodNullable<z.ZodString>;
        web: z.ZodString;
        phone: z.ZodString;
        fax: z.ZodString;
        mobile: z.ZodString;
        department: z.ZodNullable<z.ZodString>;
        street: z.ZodString;
        zip: z.ZodString;
        city: z.ZodString;
        country: z.ZodString;
        address: z.ZodNullable<z.ZodString>;
        vip: z.ZodBoolean;
        out_of_office: z.ZodBoolean;
        out_of_office_start_at: z.ZodNullable<z.ZodString>;
        out_of_office_end_at: z.ZodNullable<z.ZodString>;
        out_of_office_replacement_id: z.ZodNullable<z.ZodNumber>;
        created_by_id: z.ZodNumber;
        created_at: z.ZodString;
        updated_by_id: z.ZodNullable<z.ZodNumber>;
        updated_at: z.ZodNullable<z.ZodString>;
        role_ids: z.ZodArray<z.ZodNumber, "many">;
        organization_ids: z.ZodArray<z.ZodNumber, "many">;
        authorization_ids: z.ZodArray<z.ZodNumber, "many">;
    }, {
        roles: z.ZodArray<z.ZodString, "many">;
        organizations: z.ZodArray<z.ZodString, "many">;
        authorizations: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        created_by: z.ZodString;
        updated_by: z.ZodString;
    }>, z.ZodTypeAny, "passthrough">>;
    static apiUsers: (data: any) => import("../Utility/@type.js").Expand<z.objectInputType<{
        id: z.ZodNumber;
        organization_id: z.ZodNullable<z.ZodNumber>;
        note: z.ZodString;
        active: z.ZodBoolean;
        login_failed: z.ZodNumber;
        verified: z.ZodBoolean;
        login: z.ZodString;
        last_login: z.ZodNullable<z.ZodString>;
        firstname: z.ZodString;
        lastname: z.ZodString;
        email: z.ZodString;
        image: z.ZodNullable<z.ZodString>;
        web: z.ZodString;
        phone: z.ZodString;
        fax: z.ZodString;
        mobile: z.ZodString;
        department: z.ZodNullable<z.ZodString>;
        street: z.ZodString;
        zip: z.ZodString;
        city: z.ZodString;
        country: z.ZodString;
        address: z.ZodNullable<z.ZodString>;
        vip: z.ZodBoolean;
        out_of_office: z.ZodBoolean;
        out_of_office_start_at: z.ZodNullable<z.ZodString>;
        out_of_office_end_at: z.ZodNullable<z.ZodString>;
        out_of_office_replacement_id: z.ZodNullable<z.ZodNumber>;
        created_by_id: z.ZodNumber;
        created_at: z.ZodString;
        updated_by_id: z.ZodNullable<z.ZodNumber>;
        updated_at: z.ZodNullable<z.ZodString>;
        role_ids: z.ZodArray<z.ZodNumber, "many">;
        organization_ids: z.ZodArray<z.ZodNumber, "many">;
        authorization_ids: z.ZodArray<z.ZodNumber, "many">;
    }, z.ZodTypeAny, "passthrough">[]>;
    static apiUsersExtended: (data: any) => import("../Utility/@type.js").Expand<z.objectInputType<z.objectUtil.extendShape<{
        id: z.ZodNumber;
        organization_id: z.ZodNullable<z.ZodNumber>;
        note: z.ZodString;
        active: z.ZodBoolean;
        login_failed: z.ZodNumber;
        verified: z.ZodBoolean;
        login: z.ZodString;
        last_login: z.ZodNullable<z.ZodString>;
        firstname: z.ZodString;
        lastname: z.ZodString;
        email: z.ZodString;
        image: z.ZodNullable<z.ZodString>;
        web: z.ZodString;
        phone: z.ZodString;
        fax: z.ZodString;
        mobile: z.ZodString;
        department: z.ZodNullable<z.ZodString>;
        street: z.ZodString;
        zip: z.ZodString;
        city: z.ZodString;
        country: z.ZodString;
        address: z.ZodNullable<z.ZodString>;
        vip: z.ZodBoolean;
        out_of_office: z.ZodBoolean;
        out_of_office_start_at: z.ZodNullable<z.ZodString>;
        out_of_office_end_at: z.ZodNullable<z.ZodString>;
        out_of_office_replacement_id: z.ZodNullable<z.ZodNumber>;
        created_by_id: z.ZodNumber;
        created_at: z.ZodString;
        updated_by_id: z.ZodNullable<z.ZodNumber>;
        updated_at: z.ZodNullable<z.ZodString>;
        role_ids: z.ZodArray<z.ZodNumber, "many">;
        organization_ids: z.ZodArray<z.ZodNumber, "many">;
        authorization_ids: z.ZodArray<z.ZodNumber, "many">;
    }, {
        roles: z.ZodArray<z.ZodString, "many">;
        organizations: z.ZodArray<z.ZodString, "many">;
        authorizations: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        created_by: z.ZodString;
        updated_by: z.ZodString;
    }>, z.ZodTypeAny, "passthrough">[]>;
}
//# sourceMappingURL=UserValidator.d.ts.map