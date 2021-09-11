import { BadRequestError } from '@zkode/tms-lib';
import { CreateTicketDto } from '../interfaces/dto';
import { Ticket } from '../models';

class TicketsService {
  async createTicket(resource: CreateTicketDto) {
    const { title, price, userId } = resource;

    const ticket = Ticket.build({ title, price, userId });

    return ticket.save();
  }
}

export default new TicketsService();
