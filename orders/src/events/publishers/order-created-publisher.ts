import { Publisher, OrderCreatedEvent, Subjects } from '@jhtickets/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  readonly subject = Subjects.OrderCreated;
}
