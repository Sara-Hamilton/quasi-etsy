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

  masterUserList: User[] = [
    new User('Jenna', 'jenna@example.com', 'Portland', 'OR', this.currentDate),
    new User('Steve', 'steve@example.com', 'Albuquerque', 'NM', this.currentDate),
    new User('Kris', 'kris@example.com', 'Seattle', 'WA', this.currentDate),
    new User('Lisa', 'lisa@example.com', 'New York', 'NY', this.currentDate),
    new User('Charlie', 'charlie@example.com', 'Los Angeles', 'CA', this.currentDate)
  ]
}
