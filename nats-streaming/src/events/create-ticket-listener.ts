import { Message } from 'node-nats-streaming';
import { Listener } from './base-listener';
import { Subjects } from './subjects';
import { TicketCreatedEvent } from './events-types';

export class TicketCreatedListener extends Listener<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;

  queueGroupName = 'tickets-service';

  onMessage(data: TicketCreatedEvent['data'], message: Message) {
    console.log(data);

    message.ack();
  }
}
