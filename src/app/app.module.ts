import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NewUserComponent } from './new-user/new-user.component';
import { NewShopComponent } from './new-shop/new-shop.component';


@NgModule({
  declarations: [
    AppComponent,
    NewUserComponent,
    NewShopComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
