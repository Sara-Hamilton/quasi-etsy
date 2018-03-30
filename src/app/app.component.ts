import { Component } from '@angular/core';
import { Category } from './models/category.model';
import { Feedback } from './models/feedback.model';
import { Listing } from './models/listing.model';
import { Shop } from './models/shop.model';
import { User } from './models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Quasi Etsy';
  currentDate = new Date();
  reusableUser = new User('Jenna', 'jenna@example.com', 'Portland', 'OR', this.currentDate);

  masterUserList: User[] = [
    new User('Jenna', 'jenna@example.com', 'Portland', 'OR', this.currentDate),
    new User('Steve', 'steve@example.com', 'Albuquerque', 'NM', this.currentDate),
    new User('Kris', 'kris@example.com', 'Seattle', 'WA', this.currentDate),
    new User('Lisa', 'lisa@example.com', 'New York', 'NY', this.currentDate),
    new User('Charlie', 'charlie@example.com', 'Los Angeles', 'CA', this.currentDate)
  ]

  masterShopList: Shop[] = [
    new Shop(this.reusableUser, "Jenna's Jams", this.currentDate),
    new Shop(this.reusableUser, "Vim & Vinegar", this.currentDate),
    new Shop(this.reusableUser, "Object Shop", this.currentDate),
    new Shop(this.reusableUser, "Urban Boutique", this.currentDate),
  ]

  masterCategoryList: Category[] = [
    new Category('Jewelry & Accessories'),
    new Category('Clothing & Shoes'),
    new Category('Home & Living'),
    new Category('Wedding & Party'),
    new Category('Toys & Entertainment'),
    new Category('Art & Collectibles'),
    new Category('Craft Supplies & Tools'),
    new Category('Vintage')
  ]

  masterListingList: Listing[] = [
    new Listing('http://www.lebenslustiger.com/serendipity/archives/303-Square-Bunny-Knit-Pattern-2.html', 'cute knit bunny', new Category('Art & Collectibles'), 6, "2-3 weeks"),
    new Listing('https://www.pinterest.com/pin/163888873913553506/', 'decorative ceramic dish', new Category('Art & Collectibles'), 8, "6 weeks"),
    new Listing('http://ny-image3.etsy.com/il_fullxfull.56055027.jpg', 'handmade t-shirt with carrots on it for kids', new Category('Clothing & Shoes'), 12, "1 week"),
  ]

  addUser(newUser: User) {
    this.masterUserList.push(newUser);
  }

  addShop(newShop: Shop) {
    this.masterShopList.push(newShop);
  }

  addListing(newListing: Listing) {
    this.masterListingList.push(newListing);
  }

  addCategory(selectedListing, category) {
    selectedListing.category = category;
  }
}
