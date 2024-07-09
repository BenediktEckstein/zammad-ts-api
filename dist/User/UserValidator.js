import { z } from "zod";
import { makeValidator } from "../Utility/Valdation.js";
export const userValidator = z.object({
    id: z.number(),
    organization_id: z.number().nullable(),
    note: z.string(),
    updated_by_id: z.number().nullable(),
    active: z.boolean(),
    login_failed: z.number(),
    verified: z.boolean(),
    // source: null,
    login: z.string(),
    last_login: z.string().datetime(),
    firstname: z.string(),
    lastname: z.string(),
    email: z.string(),
    image: z.string(),
    // image_source: null,
    web: z.string(),
    phone: z.string(),
    fax: z.string(),
    mobile: z.string(),
    department: z.string(),
    street: z.string(),
    zip: z.string(),
    city: z.string(),
    country: z.string(),
    address: z.string(),
    vip: z.boolean(),
    out_of_office: z.boolean(),
    out_of_office_start_at: z.string().datetime().nullable(),
    out_of_office_end_at: z.string().datetime().nullable(),
    out_of_office_replacement_id: z.number().nullable(),
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
    // "created_by_id": 1,
    // "created_at": "2021-07-26T14:44:41.066Z",
    // "updated_at": "2021-09-23T13:17:24.825Z",
    // "role_ids":
    // [
    //    1,
    //    2
    // ],
    // "organization_ids":
    // [],
    // "authorization_ids":
    // [],
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
export class UserValidator {
    static validateApiUser = makeValidator(userValidator);
}
// export type ExpandedApiUser = z.infer<
//   typeof UserValidator.expandedUserValidator
// >;
