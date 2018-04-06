import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }  from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { NewUserComponent } from './new-user/new-user.component';
import { NewShopComponent } from './new-shop/new-shop.component';
import { NewListingComponent } from './new-listing/new-listing.component';
// import { ListingListComponent } from './listing-list/listing-list.component';
import { MarketplaceComponent } from './marketplace/marketplace.component';
import { ListingDetailComponent } from './listing-detail/listing-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    NewUserComponent,
    NewShopComponent,
    NewListingComponent,
    // ListingListComponent,
    MarketplaceComponent,
    ListingDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
