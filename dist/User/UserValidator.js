import { z } from "zod";
import { makeValidator } from "../Utility/Valdation.js";
export const userSchema = z.object({
    id: z.number(),
    organization_id: z.number().nullable(),
    note: z.string(),
    active: z.boolean(),
    login_failed: z.number(),
    verified: z.boolean(),
    // source: null,
    login: z.string(),
    last_login: z.string().datetime().nullable(),
    firstname: z.string(),
    lastname: z.string(),
    email: z.string(),
    image: z.string().nullable(),
    // image_source: null,
    web: z.string(),
    phone: z.string(),
    fax: z.string(),
    mobile: z.string(),
    department: z.string().nullable(),
    street: z.string(),
    zip: z.string(),
    city: z.string(),
    country: z.string(),
    address: z.string().nullable(),
    vip: z.boolean(),
    out_of_office: z.boolean(),
    out_of_office_start_at: z.string().datetime().nullable(),
    out_of_office_end_at: z.string().datetime().nullable(),
    out_of_office_replacement_id: z.number().nullable(),
    created_by_id: z.number(),
    created_at: z.string().datetime(),
    updated_by_id: z.number().nullable(),
    updated_at: z.string().datetime().nullable(),
    role_ids: z.array(z.number()),
    organization_ids: z.array(z.number()),
    authorization_ids: z.array(z.number()),
    // preferences:
    // {
    //    notification_config:
    //    {
    //       matrix:
    //       {
    //          create:
    //          {
    //             criteria:
    //             {
    //                owned_by_me: true,
    //                owned_by_nobody: true,
    //                subscribed: true,
    //                no: true
    //             },
    //             channel:
    //             {
    //                email: true,
    //                online: true
    //             }
    //          },
    //          update:
    //          {
    //             criteria:
    //             {
    //                owned_by_me: true,
    //                owned_by_nobody: true,
    //                subscribed: true,
    //                no: true
    //             },
    //             channel:
    //             {
    //                email: true,
    //                online: true
    //             }
    //          },
    //          reminder_reached:
    //          {
    //             criteria:
    //             {
    //                owned_by_me: true,
    //                owned_by_nobody: false,
    //                no: true
    //             },
    //             channel:
    //             {
    //                email: true,
    //                online: true
    //             }
    //          },
    //          escalation:
    //          {
    //             criteria:
    //             {
    //                owned_by_me: true,
    //                owned_by_nobody: false,
    //                no: true
    //             },
    //             channel:
    //             {
    //                email: true,
    //                online: true
    //             }
    //          }
    //       },
    //       group_ids:
    //       [
    //          "2",
    //          "1",
    //          "3"
    //       ]
    //    },
    //    locale: "de-de",
    //    intro: true,
    //    notification_sound:
    //    {
    //       "file": "Xylo.mp3",
    //       "enabled": true
    //    },
    //    "cti": true,
    //    "tickets_closed": 0,
    //    "tickets_open": 1
    // },
    // "karma_user_ids":
    // [
    //    1
    // ],
    // "group_ids":
    // {
    //    "1":
    //    [
    //       "full"
    //    ],
    //    "2":
    //    [
    //       "full"
    //    ],
    //    "3":
    //    [
    //       "full"
    //    ]
    // }
});
export const expandedUserSchema = userSchema.extend({
    roles: z.array(z.string()),
    organizations: z.array(z.string()),
    authorizations: z.array(z.string()),
    created_by: z.string(),
    updated_by: z.string(),
    //  "groups":
    //  {
    //     "Sales":
    //     [
    //        "full"
    //     ],
    //     "2nd Level":
    //     [
    //        "full"
    //     ],
    //     "Service/Desk":
    //     [
    //        "full"
    //     ]
    //  },
});
export class UserValidator {
    static apiUser = makeValidator(userSchema);
    static apiUserExpanded = makeValidator(expandedUserSchema);
    static apiUsers = makeValidator(z.array(userSchema));
    static apiUsersExtended = makeValidator(z.array(expandedUserSchema));
}
