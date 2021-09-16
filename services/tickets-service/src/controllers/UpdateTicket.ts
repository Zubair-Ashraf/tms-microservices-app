import { Request, Response } from 'express';
import { TicketService } from '../services';
import { TicketUpdatedPublisher } from '../events/publisher';
import { natsClient } from '../clients';

export const UpdateTickets = async (req: Request, res: Response) => {
  const { id } = req.params || {};

  const { userId } = req.body || {};

  const { title, price } = req.body || {};

  const ticket = await TicketService.updateTicket(id, { title, price }, userId);

  new TicketUpdatedPublisher(natsClient.client).publish({
    id: ticket.id,
    title: ticket.title,
    price: ticket.price,
    userId: ticket.userId,
  });

  res.status(200).send(ticket);
};
