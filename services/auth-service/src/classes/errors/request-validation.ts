import { ValidationError } from 'express-validator';

export class RequestValidationError extends Error {
  statusCode: number = 400;

  constructor(public errors: ValidationError[]) {
    super();

    Object.setPrototypeOf(this, RequestValidationError.prototype);
  }

  serializeErrors() {
    return this.errors.map((err) => ({ message: err.msg, field: err.param }));
  }
}
