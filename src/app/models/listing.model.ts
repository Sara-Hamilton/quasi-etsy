import { User } from './user.model';
import { Feedback } from './feedback.model';
import { Category } from './category.model';

export class Listing {
  public feedback: Feedback[] = [];
  public favoritedBy: User[] = [];

  constructor(public image: string, public description: string, public category: string, public price: number, public shippingTime: string) {}
}
