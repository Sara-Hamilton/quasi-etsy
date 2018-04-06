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

  // TODO make owner input a User object instead of a string
  submitShopForm(owner: string, name: string, city: string){
    // let newUser = new User(owner, "filler@example.com", "", "", '01-01-2011', '88');
    let newShop: Shop = new Shop('6', name, '09-09-2009');
    this.sendShop.emit(newShop);
  }

}
