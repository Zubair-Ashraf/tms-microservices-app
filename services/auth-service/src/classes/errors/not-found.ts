import { CustomError } from './custom-base';

export class NotFoundError extends CustomError {
  statusCode: number = 404;

  error: string = `Resourcse doesn't exist`;

  routePath: string = '';

  constructor(public path: string) {
    super(`Resource doesn't exist`);

    this.routePath = path;

    Object.setPrototypeOf(this, NotFoundError.prototype);
  }

  serializeErrors() {
    return [{ message: this.routePath + ' ' + this.error }];
  }
}
