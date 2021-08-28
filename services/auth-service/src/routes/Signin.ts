import express, { Response, Request } from 'express';

const router = express.Router();

router.get('/signin', (req: Request, res: Response) => {
  res.send('signin');
});

export { router as SignInRouter };
