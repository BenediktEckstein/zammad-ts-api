import { z } from "zod";
import { stateSchema } from "./StateValidator.js";

export type ApiState = z.infer<typeof stateSchema>;
