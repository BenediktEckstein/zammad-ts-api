import { ZodSchema } from "zod";
import { UnexpectedData } from "../Client/ApiError.js";

export function makeValidator<T>(val: ZodSchema<T>) {
  return function (data: any):T {
    const result = val.safeParse(data);
    if (!result.success) throw new UnexpectedData(result.error.message, data);
    return result.data 
  };
}
