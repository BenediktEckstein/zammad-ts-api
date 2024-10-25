import { ZodSchema } from "zod";
import { Expand } from "./@type.js";
export declare function makeValidator<T>(schema: ZodSchema<T>): (data: any) => Expand<T>;
//# sourceMappingURL=Valdation.d.ts.map