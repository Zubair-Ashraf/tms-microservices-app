import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { NotAuthenticateError } from '../classes/errors';

interface UserPayload {
  id: string;
  email: string;
}

declare global {
  namespace Express {
    interface Request {
      userId?: string;
    }
  }
}

export const authenticate = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.session?.jwt) {
    throw new NotAuthenticateError();
  }

  const payload = jwt.verify(
    req.session.jwt,
    process.env.JWT_SECRECT_KEY!
  ) as UserPayload;

  if (!payload) {
    throw new NotAuthenticateError();
  }

  req.body = { userId: payload.id };

  next();
};
