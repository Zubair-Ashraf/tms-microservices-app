import express, { Request } from 'express';
import 'express-async-errors';
import cookieSession from 'cookie-session';
import * as routes from './routes';
import * as middlewares from '@zkode/tms-lib';
import { NotFoundError } from '@zkode/tms-lib';
import { DatabaseConnection, NatsConnection } from './connections';
import { natsClient } from './clients';

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());

app.set('trust proxy', true);

app.use(cookieSession({ secure: false, signed: false }));

app.use('/api/orders', [
  routes.GetOrdersRouter,
  routes.CreateOrderRouter,
  // routes.UpdateTicketRouter,
]);

app.all('*', (req: Request) => {
  throw new NotFoundError(req.path);
});

app.use(middlewares.errorhandler);

const launchApp = () => {
  app.listen(port, () =>
    console.log(`Orders service is listening at port: ${port}`)
  );
};

const startup = () => {
  DatabaseConnection()
    .then(() => console.log('Database connected!'))
    .catch((err) => console.log('Database connection failed: ', err));
  launchApp();
  // NatsConnection()
  //   .then(() => {
  //     console.log('NATS server connected');

  //     natsClient.client.on('close', (err) => {
  //       console.log('NATS server connection closed', err);

  //       process.exit();
  //     });

  //     process.on('SIGINT', () => natsClient.client.close());

  //     process.on('SIGTERM', () => natsClient.client.close());

  //     launchApp();
  //   })
  //   .catch((err) => console.log('Nats connection failed: ', err));
};

startup();
