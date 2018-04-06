import { Injectable } from '@angular/core';
import { Listing } from './models/listing.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';


@Injectable()
export class ListingService {
  listings: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase, private router: Router) {
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

  updateListing(localUpdatedListing) {
    let projectInFirebase = this.getListingById(localUpdatedListing.$key);
    projectInFirebase.update({image: localUpdatedListing.image,
                              description: localUpdatedListing.description,
                              category: localUpdatedListing.category,
                              price: localUpdatedListing.price,
                              shippingTime: localUpdatedListing.shippingTime,
                            });
  }

  deleteListing(localListing) {
    localListing.subscribe(data => {
      let listingInFirebase = this.getListingById(data.$key);
      listingInFirebase.remove();
    });
    this.router.navigate(['']);
  }

}
