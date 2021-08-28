import express from 'express';
import * as routes from './routes';
import * as middlewares from './middlewares';
import { NotFoundError } from './classes/errors';

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());

app.use('/api/auth', [
  routes.SignInRouter,
  routes.SignUpRouter,
  routes.SignOutRouter,
  routes.CurrentUserRouter,
]);

app.all('*', () => {
  throw new NotFoundError();
});

app.use(middlewares.errorhandler);

app.listen(port, () =>
  console.log(`Auth service is listening at port: ${port}`)
);
