import { Subjects, TicketCreatedEvent, Publisher } from '@zkode/tms-lib';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
