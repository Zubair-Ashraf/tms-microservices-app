import { NextFunction, Request, Response } from 'express';
import * as errors from '../classes/errors';

export const errorhandler = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (error instanceof errors.CustomError) {
    res.status(error.statusCode).send({ errors: error.serializeErrors() });
  }

  res.status(500).send({
    errors: [{ message: 'Something went wrong' }],
  });
};
