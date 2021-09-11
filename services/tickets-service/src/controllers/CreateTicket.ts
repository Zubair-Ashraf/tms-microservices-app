import { Request, Response } from 'express';
import { TicketService } from '../services';

export const CreateTicket = async (
  req: Request<{}, {}, { title: string; price: number; userId: string }>,
  res: Response
) => {
  const ticket = await TicketService.createTicket(req.body);

  res.status(200).send(ticket);
};
