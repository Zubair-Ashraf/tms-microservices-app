import nats from 'node-nats-streaming';
import { TicketCreatedPublisher } from './events/create-ticket-publisher';

const client = nats.connect('ticketing', 'abc', {
  url: 'http://localhost:4222',
});

client.on('connect', () => {
  console.log('Publisher connected to NATS');

  const data = {
    id: '123',
    title: 'concert',
    price: 20,
  };

  new TicketCreatedPublisher(client).publish(data);
});
