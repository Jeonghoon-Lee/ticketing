import { Publisher, Subjects, TicketUpdatedEvent } from '@jhtickets/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
