import { natsClient } from '../clients';

export const NatsConnection = async () => {
  return natsClient.connect({
    clusterId: 'ticketing',
    clientId: `abc74jn`,
    url: process.env.NATS_CONNECTION_STRING!,
  });
};
