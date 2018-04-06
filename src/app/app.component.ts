import { Component } from '@angular/core';
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

  addUser(newUser: User) {
    this.masterUserList.push(newUser);
  }

  addShop(newShop: Shop) {
    this.masterShopList.push(newShop);
  }

  addCategory(selectedListing, category) {
    selectedListing.category = category;
  }
}
