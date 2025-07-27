class ApiError extends Error {
  constructor(
    statusCode,
    message = "something went wrong",
    error = [],
    statck = ""
  ) {
    super(message);
    this.statusCode = statusCode;
    this.error = errors;
    this.success = false;
    this.data = null;
    this.message = message;

    if (statck) {
      this.stack = statck;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export { ApiError };
