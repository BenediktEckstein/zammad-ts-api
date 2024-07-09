import { ZodSchema } from "zod";
import { UnexpectedData } from "../Client/ApiError.js";

export function makeValidator(val: ZodSchema) {
  return function (data: any) {
    const result = val.safeParse(data);
    if (!result.success) throw new UnexpectedData(result.error.message, data);
    return result.data;
  };
}
