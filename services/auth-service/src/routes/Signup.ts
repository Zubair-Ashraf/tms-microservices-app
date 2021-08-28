import express, { Response, Request } from 'express';

const router = express.Router();

router.get('/signup', (req: Request, res: Response) => {
  res.send('signup');
});

export { router as SignUpRouter };
