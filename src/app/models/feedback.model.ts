import { User } from './user.model';

export class Feedback {
  constructor(public userId: string, public starRating: number, public content: string, public date: string) {}
}
