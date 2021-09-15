import nats from 'node-nats-streaming';
import { TicketCreatedPublisher } from './events/create-ticket-publisher';

const client = nats.connect('ticketing', 'abc', {
  url: 'http://localhost:4222',
});

client.on('connect', async () => {
  console.log('Publisher connected to NATS');

  const data = {
    id: '123',
    title: 'concert',
    price: 20,
  };

  const publisher = new TicketCreatedPublisher(client);

  await publisher.publish(data);
});
