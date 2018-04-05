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

  masterUserList: User[] = [
    new User('Jenna', 'jenna@example.com', 'Portland', 'OR', '01-12-2010', '1'),
    new User('Steve', 'steve@example.com', 'Albuquerque', 'NM', '05-03-2015', '2'),
    new User('Kris', 'kris@example.com', 'Seattle', 'WA', '03-03-2018', '3'),
    new User('Lisa', 'lisa@example.com', 'New York', 'NY', '04-23-2017', '4'),
    new User('Charlie', 'charlie@example.com', 'Los Angeles', 'CA', '12-12-2012', '5')
  ]

  masterShopList: Shop[] = [
    new Shop('1', "Jenna's Jams", '02-01-2014', '1'),
    new Shop('2', "Vim & Vinegar", '04-27-2015', '2'),
    new Shop('3', "Object Shop", '05-03-2000', '3'),
    new Shop('4', "Urban Boutique", '02-04-2016', '4'),
  ]

  masterCategoryList: Category[] = [
    new Category('Jewelry & Accessories', '1'),
    new Category('Clothing & Shoes', '2'),
    new Category('Home & Living', '3'),
    new Category('Wedding & Party', '4'),
    new Category('Toys & Entertainment', '5'),
    new Category('Art & Collectibles', '6'),
    new Category('Craft Supplies & Tools', '7'),
    new Category('Vintage', '8')
  ]

  masterListingList: Listing[] = [
    new Listing('http://www.lebenslustiger.com/serendipity/uploads/GreyKnitBunny.jpg', 'cute knit bunny', 'Art & Collectibles', 6, "2-3 weeks", '1'),
    new Listing('http://www.wvpottery.com/handmadepottery/serving-dish-gg.jpg', 'decorative ceramic dish', 'Art & Collectibles', 89, "6 weeks", '2'),
    new Listing('http://ny-image3.etsy.com/il_fullxfull.56055027.jpg', 'handmade t-shirt with carrots on it for kids', 'Clothing & Shoes', 12, "1 week", '3'),
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
