import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Listing } from '../models/listing.model';
import { Category } from '../models/category.model';

@Component({
  selector: 'app-new-listing',
  templateUrl: './new-listing.component.html',
  styleUrls: ['./new-listing.component.css']
})
export class NewListingComponent {
  @Input() childCategoryList: Category[];
  @Output() sendListing = new EventEmitter();

  // TODO figure out how make price display cents
  submitListingForm(image: string, description: string, category: string, price: string, shippingTime: string) {
    let newCategory: Category = new Category(category);
    let newListing: Listing = new Listing (image, description, category, parseInt(price), shippingTime, '5');
    this.sendListing.emit(newListing);
  }
}
