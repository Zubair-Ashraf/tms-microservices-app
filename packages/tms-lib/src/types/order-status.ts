export enum OrderStatus {
  //when the order has been created, but the tciket it is trying to order has not been reserved
  Created = 'created',
  //The ticket the order is trying to reserve has already been reserved, or when user has cancelled the order
  Cancelled = 'cancelled',
  //The order has successfully reserved the ticket
  AwaitingPayment = 'awaiting:payment',
  //The order has reserved the ticket and the user has provide payment successfully
  Complete = 'complete',
}
