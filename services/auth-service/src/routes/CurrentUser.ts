import express, { Response, Request } from 'express';

const router = express.Router();

router.get('/current-user', (req: Request, res: Response) => {
  res.send('current-user');
});

export { router as CurrentUserRouter };
