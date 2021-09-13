import nats from 'node-nats-streaming';
import { TicketCreatedListener } from './events/create-ticket-listener';

const stan = nats.connect('ticketing', `123`, {
  url: 'http://localhost:4222',
});

stan.on('connect', () => {
  console.log('Listener connected!');

  new TicketCreatedListener(stan).listen();
});
