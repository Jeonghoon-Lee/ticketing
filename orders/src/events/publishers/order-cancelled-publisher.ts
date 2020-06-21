import { Publisher, OrderCancelledEvent, Subjects } from '@jhtickets/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  readonly subject = Subjects.OrderCancelled;
}
