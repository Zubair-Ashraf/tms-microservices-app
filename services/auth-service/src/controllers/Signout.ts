import { Request, Response } from 'express';

export const Signout = async (req: Request, res: Response) => {
  req.session = null;

  res.status(200).send('Successfully signout');
};
