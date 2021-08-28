export class DatabaseConnectionError extends Error {
  error: string = 'Database connection failed';

  constructor(error: string) {
    super();

    this.error = error;

    Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
  }
}
