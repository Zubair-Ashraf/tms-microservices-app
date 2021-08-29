import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import { RequestValidationError } from '../classes/errors';

export const Signup = (req: Request, res: Response) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    throw new RequestValidationError(errors.array());
  }
};
