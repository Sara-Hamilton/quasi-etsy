import { Shop } from './shop.model';
import { Listing } from './listing.model';

export class User {
  public shopOwner: boolean = false;
  public profile: string = "";
  public favoriteShops: Shop[] = [];
  public favoriteItems: Listing[] = [];
  public picture: string = "";
  constructor(public name: string, public email: string, public city: string, public state: string, public joinDate: string, public id: string) {}
}
