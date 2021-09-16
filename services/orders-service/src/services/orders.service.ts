import { NotAuthenticateError, NotFoundError } from '@zkode/tms-lib';
import { CreateOrderDto } from '../interfaces/dto';
import { Order } from '../models';

class OrdersService {
  async createOrder(resource: CreateOrderDto) {
    // const { title, price, userId } = resource;
    // const ticket = Ticket.build({ title, price, userId });
    // return ticket.save();
  }

  async getOrders() {
    const orders = Order.find();

    return orders;
  }

  async getOrderById(id: string) {
    const order = await Order.findById(id);

    if (!order) {
      throw new NotFoundError('Order doesnot exist');
    }

    return order;
  }
}

export default new OrdersService();
