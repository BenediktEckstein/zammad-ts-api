/**
 * Various class definitions for errors that occur during API calls
 * @author Peter Kappelt
 */
declare class ApiError extends Error {
    /**
     * Instantiate a new Zammad Api Error object
     * @param message Message of this error
     */
    constructor(message: string);
}
export declare class UnexpectedResponse extends ApiError {
    /**
     * Instantiate a new UnexpectedResponse error object
     * @param message Message to show user
     * @param expected Data type/ data that was expected to be received
     * @param received Data type/ data that was actually received
     */
    constructor(message: string, expected: string | number, received: string | number);
    expected: string | number;
    received: string | number;
}
export declare class UnexpectedData extends ApiError {
    /**
     * Instantiate a new UnexpectedResponse error object
     * @param message Message to show user
     * @param received Data type/ data that was actually received
     */
    constructor(message: string, received: unknown);
    received: string | null;
}
export declare class InvalidRequest extends ApiError {
    /**
     * Instantiate a new InvalidRequest error object
     * @param message Message to store
     */
    constructor(message: string);
}
export declare class Unimplemented extends ApiError {
    /**
     * Instantiate a new Unimplemented error object
     */
    constructor(message: string);
}
export {};
//# sourceMappingURL=ApiError.d.ts.map