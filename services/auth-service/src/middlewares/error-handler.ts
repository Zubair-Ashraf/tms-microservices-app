import { NextFunction, Request, Response } from 'express';

export const errorhandler = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {};
