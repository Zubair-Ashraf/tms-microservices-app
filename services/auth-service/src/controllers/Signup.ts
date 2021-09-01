import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import { RequestValidationError } from '../classes/errors';
import { generateToken } from '../helpers';
import { AuthService } from '../services';

export const Signup = async (req: Request, res: Response) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    throw new RequestValidationError(errors.array());
  }

  const user = await AuthService.createUser(req.body);

  const token = generateToken({ id: user.id, email: user.email });

  req.session = { jwt: token };

  res.status(200).send(user);
};
