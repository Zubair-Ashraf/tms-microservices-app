import express from 'express';
import * as routes from './routes';

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());

app.use('/api/auth', [
  routes.SignInRouter,
  routes.SignUpRouter,
  routes.SignOutRouter,
  routes.CurrentUserRouter,
]);

app.listen(port, () =>
  console.log(`Auth service is listening at port: ${port}`)
);
