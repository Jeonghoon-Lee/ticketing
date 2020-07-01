import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from '@jhtickets/common';

export class ExpirationCompletePublisher extends Publisher<
  ExpirationCompleteEvent
> {
  readonly subject = Subjects.ExpirationComplete;
}
