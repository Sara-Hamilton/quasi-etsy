import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Shop } from '../models/shop.model';
import { User } from '../models/user.model';

@Component({
  selector: 'app-new-shop',
  templateUrl: './new-shop.component.html',
  styleUrls: ['./new-shop.component.css']
})
export class NewShopComponent {
  @Input() childUserList: User[];
  @Input() shopOwner: User;
  @Output() sendShop = new EventEmitter();

  currentDate: Date = new Date();

  // assignedOwner: User = this.childUserList[2];

  // owner should be a User object - will be current logged in user - unsure how to get user
  submitShopForm(name: string) {
    let newShop: Shop = new Shop(this.shopOwner, name, this.currentDate);
    console.log(newShop);
  }

}
