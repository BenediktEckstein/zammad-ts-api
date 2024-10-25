import { ZodSchema } from "zod";
import { UnexpectedData } from "../Client/ApiError.js";
import { Expand } from "./@type.js";

export function makeValidator<T>(schema: ZodSchema<T>) {
  return function (data: any): Expand<T> {
    const result = schema.safeParse(data);
    if (!result.success) throw new UnexpectedData(result.error.message, data);
    return result.data as Expand<T>
  };
}
