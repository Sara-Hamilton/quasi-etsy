import { Pipe, PipeTransform } from '@angular/core';
import { Listing } from './models/listing.model';

@Pipe({
  name: "category",
  pure: false
})

export class CategoryPipe implements PipeTransform {
  transform(input: Listing[], desiredCategory) {
    if (!input) {
      return [];
    } else if (!desiredCategory) {
      return input;
    } else {
    return input.filter(listing => listing.category == desiredCategory);
    }
  }
}
