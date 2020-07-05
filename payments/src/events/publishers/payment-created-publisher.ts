import { Publisher, PaymentCreatedEvent, Subjects } from '@jhtickets/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  readonly subject = Subjects.PaymentCreated;
}
