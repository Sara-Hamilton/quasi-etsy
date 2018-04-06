import { Component } from '@angular/core';
import { Listing } from '../models/listing.model';
import { Category } from '../models/category.model';
import { ListingService } from '../listing.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-listing',
  templateUrl: './new-listing.component.html',
  styleUrls: ['./new-listing.component.css'],
  providers: [ListingService]
})
export class NewListingComponent {
  // @Input() childCategoryList: Category[];
  // @Output() sendListing = new EventEmitter();

  constructor(private router: Router, private listingService: ListingService) { }

  // TODO figure out how make price display cents
  submitListingForm(image: string, description: string, category: string, price: string, shippingTime: string) {
    let newCategory: Category = new Category(category);
    let newListing: Listing = new Listing (image, description, category, parseInt(price), shippingTime, 5);
    // this.listingService.addListing(newListing);
    // this.navigateToNewListing();
  }

  // navigateToNewListing() {
  //   this.listingService.getLastListingId().subscribe(data => {
  //     this.router.navigate(['listings', data[data.length-1].$key]);
  //   });
  // }
}
