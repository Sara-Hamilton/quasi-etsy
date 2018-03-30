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
  // @Input() shopOwner: User;
  @Output() sendShop = new EventEmitter();

  currentDate: Date = new Date();

  // assignedOwner: User[] = childUserList;

  // owner should be a User object - will be current logged in user - unsure how to get user
  submitShopForm(name: string, ){
    console.log("shopNname", name);
    // let newShop: Shop = new Shop(this.assignedOwner, name, this.currentDate);
    // console.log("newShop", newShop);
  }

}
