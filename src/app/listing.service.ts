import { Injectable } from '@angular/core';
import { Listing } from './models/listing.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Injectable()
export class ListingService {
  listings: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.listings = database.list('listings');
  }

  getListings() {
    return this.listings;
  }

  getListingById(listingId: string){
    return this.database.object('listings/' + listingId);
  }

  addListing(newListing) {
    this.listings.push(newListing);
  }

  getLastListingId() {
    return this.database.list('listings');
  }
}
