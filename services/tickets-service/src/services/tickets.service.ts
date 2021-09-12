import { NotAuthenticateError, NotFoundError } from '@zkode/tms-lib';
import { CreateTicketDto, UpdateTicketDto } from '../interfaces/dto';
import { Ticket } from '../models';

class TicketsService {
  async createTicket(resource: CreateTicketDto) {
    const { title, price, userId } = resource;

    const ticket = Ticket.build({ title, price, userId });

    return ticket.save();
  }

  async getTickets() {
    const tickets = Ticket.find();

    return tickets;
  }

  async getTicketById(id: string) {
    const ticket = await Ticket.findById(id);

    if (!ticket) {
      throw new NotFoundError('Ticket doesnot exist');
    }

    return ticket;
  }

  async updateTicket(id: string, resource: UpdateTicketDto, userId: string) {
    const ticket = await Ticket.findById(id);

    if (!ticket) {
      throw new NotFoundError('Ticket doesnot exist');
    }

    if (userId !== ticket.userId) {
      throw new NotAuthenticateError();
    }

    ticket.set(resource);

    return ticket.save();
  }
}

export default new TicketsService();
