import { Publisher, Subjects, TicketCreatedEvent } from '@jhtickets/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
