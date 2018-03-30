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
  @Output() sendShop = new EventEmitter();

  currentDate: Date = new Date();

  // TODO make owner in put a User object instead of a string
  submitShopForm(owner: string, name: string, ){
    let newShop: Shop = new Shop(owner, name, this.currentDate);
  }

}
