import { CustomError } from './custom-base';

export class NotFoundError extends CustomError {
  statusCode: number = 404;

  error: string = `Resourcse doesn't exist`;

  constructor() {
    super(`Resource doesn't exist`);

    Object.setPrototypeOf(this, NotFoundError.prototype);
  }

  serializeErrors() {
    return [{ message: this.error }];
  }
}
