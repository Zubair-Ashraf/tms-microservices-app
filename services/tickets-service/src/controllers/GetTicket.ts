import { Request, Response } from 'express';
import { TicketService } from '../services';

export const GetTickets = async (req: Request, res: Response) => {
  const tickets = await TicketService.getTickets();

  res.status(200).send(tickets);
};

export const GetTicket = async (req: Request, res: Response) => {
  const ticket = await TicketService.getTicketById(req.params.id);

  res.status(200).send(ticket);
};
