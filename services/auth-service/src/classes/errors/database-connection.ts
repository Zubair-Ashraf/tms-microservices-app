export class DatabaseConnectionError extends Error {
  error: string = 'Database connection failed';

  statusCode: number = 500;

  constructor(error: string) {
    super();

    this.error = error;

    Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
  }

  serializeErrors() {
    return [{ message: this.error }];
  }
}
