import express from 'express';
import * as routes from './routes';

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());

app.use(routes.SignInRouter);

app.use(routes.SignUpRouter);

app.use(routes.SignOutRouter);

app.use(routes.CurrentUserRouter);

app.listen(port, () =>
  console.log(`Auth service is listening at port: ${port}`)
);
