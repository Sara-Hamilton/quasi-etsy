import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NewUserComponent } from './new-user/new-user.component';
import { NewShopComponent } from './new-shop/new-shop.component';
import { NewListingComponent } from './new-listing/new-listing.component';
import { ListingListComponent } from './listing-list/listing-list.component';


@NgModule({
  declarations: [
    AppComponent,
    NewUserComponent,
    NewShopComponent,
    NewListingComponent,
    ListingListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
