import { User } from './user.model';
import { Feedback } from './feedback.model';
import { Listing } from './listing.model';

export class Shop {
  public profile: string = "";
  public favorited: number = 0;
  public sales: number = 0;
  public feedback: Feedback[] = [];
  public listings: Listing[] = [];

  constructor(public ownerId: string, public name: string, public joinDate: string, public id: string) {}
}
