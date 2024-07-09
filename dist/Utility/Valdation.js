import { UnexpectedData } from "../Client/ApiError.js";
export function makeValidator(val) {
    return function (data) {
        const result = val.safeParse(data);
        if (!result.success)
            throw new UnexpectedData(result.error.message, data);
        return result.data;
    };
}
