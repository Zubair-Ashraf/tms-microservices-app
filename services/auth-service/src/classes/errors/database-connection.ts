import { CustomError } from './custom-base';

export class DatabaseConnectionError extends CustomError {
  error: string = 'Database connection failed';

  statusCode: number = 500;

  constructor(error: string) {
    super(error);

    this.error = error;

    Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
  }

  serializeErrors() {
    return [{ message: this.error }];
  }
}
