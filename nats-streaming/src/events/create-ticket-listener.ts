import { Message } from 'node-nats-streaming';
import { Listener } from './base-listener';

export class TicketCreatedListener extends Listener {
  subject = 'ticket:created';

  queueGroupName = 'tickets-service';

  onMessage(data: any, message: Message) {
    console.log(data);

    message.ack();
  }
}
