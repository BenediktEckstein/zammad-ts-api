


import { z } from "zod";
import { makeValidator } from "../Utility/Valdation.js";

export const stateSchema = z.object({
  id: z.number(),
  state_type_id:z.number(),
  next_state_id:z.number().nullable(),
  name: z.string(),
  note: z.string().nullable(),
  active: z.boolean(),
  ignore_escalation:z.boolean(),
  default_create:z.boolean(),
default_follow_up:z.boolean(),
  updated_by_id: z.number().nullable(),
  created_by_id: z.number(),
  created_at: z.string().datetime(),
  updated_at: z.string().datetime(),
});


export class StateValidator {
  static validateApiState = makeValidator(stateSchema);

}

