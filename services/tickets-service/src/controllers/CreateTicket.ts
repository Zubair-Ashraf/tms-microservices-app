import { Request, Response } from 'express';
import { TicketService } from '../services';
import { TicketCreatedPublisher } from '../events/publisher';
import { natsClient } from '../clients';

export const CreateTicket = async (
  req: Request<{}, {}, { title: string; price: number; userId: string }>,
  res: Response
) => {
  const ticket = await TicketService.createTicket(req.body);

  await new TicketCreatedPublisher(natsClient.client).publish({
    id: ticket.id,
    title: ticket.title,
    price: ticket.price,
    userId: ticket.userId,
  });

  res.status(200).send(ticket);
};
