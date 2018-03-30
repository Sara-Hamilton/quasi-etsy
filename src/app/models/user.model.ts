export class User {
  public shopOwner: boolean = false;
  public profile: string = "";
  public favoriteShops: Shop[] = [];
  public favoriteItems: Listing[] = [];
  public picture: string = "";
  constructor(public name: string, public email: string, public city: string, public state: string, public joinDate: Date) {}
}
