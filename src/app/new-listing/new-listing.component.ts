import { Component } from '@angular/core';
import { Listing } from '../models/listing.model';
import { ListingService } from '../listing.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-listing',
  templateUrl: './new-listing.component.html',
  styleUrls: ['./new-listing.component.css'],
  providers: [ListingService]
})
export class NewListingComponent {

  constructor(private router: Router, private listingService: ListingService) { }

  submitListingForm(image: string, shop: string, description: string, category: string, price: string, shippingTime: string) {
    let newListing: Listing = new Listing (image, shop, description, category, parseInt(price), shippingTime);
    this.listingService.addListing(newListing);
    this.navigateToNewListing();
  }

  navigateToNewListing() {
    this.listingService.getLastListingId().subscribe(data => {
      this.router.navigate(['listings', data[data.length-1].$key]);
    });
  }
}
