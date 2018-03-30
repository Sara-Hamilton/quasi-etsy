import { Component, Output, EventEmitter } from '@angular/core';
import { User } from '../models/user.model';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent {
  @Output() sendUser = new EventEmitter();

  currentDate: Date = new Date();

  submitUserForm(name: string, email: string, city: string, state: string, joinDate: Date) {
    let newUser: User = new User(name, email, city, state, this.currentDate);
    this.sendUser.emit(newUser);
    console.log("user", newUser);
  }

}
