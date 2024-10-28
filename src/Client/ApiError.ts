/**
 * Various class definitions for errors that occur during API calls
 * @author Peter Kappelt
 */

class ApiError extends Error {
  /**
   * Instantiate a new Zammad Api Error object
   * @param message Message of this error
   */
  constructor(message: string) {
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
  constructor(
    message: string,
    expected: string | number,
    received: string | number
  ) {
    super(`[UnexpectedResponse] ${message}`);
    this.name = "ZammadApiError.UnexpectedResponse";

    this.expected = expected;
    this.received = received;
  }

  expected: string | number;
  received: string | number;
}

export class UnexpectedData extends ApiError {
  /**
   * Instantiate a new UnexpectedResponse error object
   * @param message Message to show user
   * @param received Data type/ data that was actually received
   */
  constructor(message: string, received: unknown) {
    super(`[UnexpectedData] ${message}`);
    this.name = "ZammadApiError.UnexpectedData";

    if (
      received instanceof Object &&
      "data" in received &&
      received.data instanceof Object
    ) {
      this.received = JSON.stringify(received.data);
    }
  }

  received: string | null = null;
}

export class InvalidRequest extends ApiError {
  /**
   * Instantiate a new InvalidRequest error object
   * @param message Message to store
   */
  constructor(message: string) {
    super(`[InvalidRequest] ${message}`);
    this.name = "ZammadApiError.InvalidRequest";
  }
}

export class Unimplemented extends ApiError {
  /**
   * Instantiate a new Unimplemented error object
   */
  constructor(message: string) {
    super(`[Unimplemented] ${message}`);
    this.name = "ZammadApiError.Unimplemented";
  }
}
