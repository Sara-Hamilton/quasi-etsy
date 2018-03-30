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
    new Shop(reusableUser, "Jenna's Jams", currentDate),
    new Shop(reusableUser, "Vim & Vinegar", currentDate),
    new Shop(reusableUser, "Object Shop", currentDate),
    new Shop(reusableUser, "Urban Boutique", currentDate),
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

  masterListingList: Listing[] = []

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
    this.selectedListing.category = category;
  }
}
