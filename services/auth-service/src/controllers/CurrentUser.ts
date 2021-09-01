import { Request, Response } from 'express';
import { AuthService } from '../services';

export const CurrentUser = async (
  req: Request<{}, {}, { userId: string }>,
  res: Response
) => {
  const { userId } = req.body;

  const user = await AuthService.getUserById(userId);

  res.status(200).send(user);
};
