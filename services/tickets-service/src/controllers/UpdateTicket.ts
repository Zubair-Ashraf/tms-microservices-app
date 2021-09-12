import { Request, Response } from 'express';
import { TicketService } from '../services';

export const UpdateTickets = async (req: Request, res: Response) => {
  const { id } = req.params || {};

  const { userId } = req.body || {};

  const { title, price } = req.body || {};

  const ticket = await TicketService.updateTicket(id, { title, price }, userId);

  res.status(200).send(ticket);
};
