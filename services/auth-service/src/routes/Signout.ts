import express, { Response, Request } from 'express';

const router = express.Router();

router.get('/signout', (req: Request, res: Response) => {
  res.send('Signout');
});

export { router as SignOutRouter };
