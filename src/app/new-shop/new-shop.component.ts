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

  submitShopForm(owner: User, name: string, joinDate: Date) {
    let newShop: Shop = new Shop(owner, name, this.currentDate);
  }

}
