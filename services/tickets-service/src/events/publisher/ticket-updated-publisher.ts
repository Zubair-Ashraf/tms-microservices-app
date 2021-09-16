import { Subjects, TicketUpdatedEvent, Publisher } from '@zkode/tms-lib';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}
