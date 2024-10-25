import { UnexpectedData } from "../Client/ApiError.js";
export function makeValidator(schema) {
    return function (data) {
        const result = schema.safeParse(data);
        if (!result.success)
            throw new UnexpectedData(result.error.message, data);
        return result.data;
    };
}
