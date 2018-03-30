import { User } from './user.model';

export class Feedback {
  constructor(public user: User, public starRating: number, public content: string, public date: Date) {}
}
