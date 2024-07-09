/**
 * Various class definitions for errors that occur during API calls
 * @author Peter Kappelt
 */
class ApiError extends Error {
    /**
     * Instantiate a new Zammad Api Error object
     * @param message Message of this error
     */
    constructor(message) {
        super(`[ZammadApiError] ${message}`);
        this.name = "ZammadApiError";
    }
}
export class UnexpectedResponse extends ApiError {
    /**
     * Instantiate a new UnexpectedResponse error object
     * @param message Message to show user
     * @param expected Data type/ data that was expected to be received
     * @param received Data type/ data that was actually received
     */
    constructor(message, expected, received) {
        super(`[UnexpectedResponse] ${message}`);
        this.name = "ZammadApiError.UnexpectedResponse";
        this.expected = expected;
        this.received = received;
    }
    expected;
    received;
}
export class UnexpectedData extends ApiError {
    /**
     * Instantiate a new UnexpectedResponse error object
     * @param message Message to show user
     * @param received Data type/ data that was actually received
     */
    constructor(message, received) {
        super(`[UnexpectedData] ${message}`);
        this.name = "ZammadApiError.UnexpectedData";
        this.received = JSON.stringify(received);
    }
    received;
}
export class InvalidRequest extends ApiError {
    /**
     * Instantiate a new InvalidRequest error object
     * @param message Message to store
     */
    constructor(message) {
        super(`[InvalidRequest] ${message}`);
        this.name = "ZammadApiError.InvalidRequest";
    }
}
export class Unimplemented extends ApiError {
    /**
     * Instantiate a new Unimplemented error object
     */
    constructor(message) {
        super(`[Unimplemented] ${message}`);
        this.name = "ZammadApiError.Unimplemented";
    }
}
