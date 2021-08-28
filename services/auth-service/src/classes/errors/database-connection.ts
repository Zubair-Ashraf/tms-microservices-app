import { CustomError } from './custom-base';

export class DatabaseConnectionError extends CustomError {
  error: string = 'Database connection failed';

  statusCode: number = 500;

  constructor() {
    super('Database connection failed');

    Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
  }

  serializeErrors() {
    return [{ message: this.error }];
  }
}
