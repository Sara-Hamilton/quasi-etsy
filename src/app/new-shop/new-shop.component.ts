import { Component, Output, EventEmitter } from '@angular/core';
import { Shop } from '../models/shop.model';
import { User } from '../models/user.model';

@Component({
  selector: 'app-new-shop',
  templateUrl: './new-shop.component.html',
  styleUrls: ['./new-shop.component.css']
})
export class NewShopComponent {
  @Output() sendShop = new EventEmitter();

  currentDate: Date = new Date();

  // owner should be a User object - will be current logged in user - unsure how to get user
  submitShopForm(owner: User, name: string, joinDate: Date) {
    let newShop: Shop = new Shop(owner, name, this.currentDate);
  }

}
