import express, { Request } from 'express';
import 'express-async-errors';
import cookieSession from 'cookie-session';
// import * as routes from './routes';
import * as middlewares from '@zkode/tms-lib';
import { DatabaseConnectionError, NotFoundError } from '@zkode/tms-lib';
// import { DatabaseConnection } from './connections';

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());

app.set('trust proxy', true);

app.use(cookieSession({ secure: false, signed: false }));

// app.use('/api/auth', [
//   routes.SignInRouter,
//   routes.SignUpRouter,
//   routes.SignOutRouter,
//   routes.CurrentUserRouter,
// ]);

app.all('*', (req: Request) => {
  throw new NotFoundError(req.path);
});

app.use(middlewares.errorhandler);

// DatabaseConnection()
//   .then(() => {
//     app.listen(port, () =>
//       console.log(`Tickets service is listening at port: ${port}`)
//     );
//   })
//   .catch(() => {
//     throw new DatabaseConnectionError();
//   });

app.listen(port, () =>
  console.log(`Tickets service is listening at port: ${port}`)
);
