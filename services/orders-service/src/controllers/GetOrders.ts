import { Request, Response } from 'express';
import { OrdersService } from '../services';

export const GetOrders = async (req: Request, res: Response) => {
  const orders = await OrdersService.getOrders();

  res.status(200).send(orders);
};

export const GetOrder = async (req: Request, res: Response) => {
  const order = await OrdersService.getOrderById(req.params.id);

  res.status(200).send(order);
};
