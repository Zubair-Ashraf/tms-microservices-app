import { ValidationError } from 'express-validator';
import { CustomError } from './custom-base';

export class RequestValidationError extends CustomError {
  statusCode: number = 400;

  constructor(public errors: ValidationError[]) {
    super('Invalid request');

    Object.setPrototypeOf(this, RequestValidationError.prototype);
  }

  serializeErrors() {
    return this.errors.map((err) => ({ message: err.msg, field: err.param }));
  }
}
