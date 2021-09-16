import { Request, Response } from 'express';
import { OrdersService } from '../services';
// import { OrdersCreatedPublisher } from '../events/publisher';
import { natsClient } from '../clients';

export const CreateOrder = async (req: Request, res: Response) => {
  const order = await OrdersService.createOrder(req.body);

  //   await new TicketCreatedPublisher(natsClient.client).publish({
  //     id: ticket.id,
  //     title: ticket.title,
  //     price: ticket.price,
  //     userId: ticket.userId,
  //   });

  res.status(200).send(order);
};
