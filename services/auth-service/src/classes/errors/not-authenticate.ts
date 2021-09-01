import { CustomError } from './custom-base';

export class NotAuthenticateError extends CustomError {
  statusCode: number = 401;

  message = 'You are un-authorized to access this resource';

  constructor() {
    super('You are un-authorized to access this resource');

    Object.setPrototypeOf(this, NotAuthenticateError.prototype);
  }

  serializeErrors() {
    return [{ message: this.message }];
  }
}
