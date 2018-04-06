import { Pipe, PipeTransform } from '@angular/core';
import { Listing } from './models/listing.model';

@Pipe({
  name: "category",
  pure: false
})

export class CategoryPipe implements PipeTransform {
  transform(input: Listing[], desiredCategory) {
    var output: Listing[] = [];
    for (var i=0; i < input.length; i++) {
      if (input[i].category === desiredCategory) {
        output.push(input[i]);
      }
    }
    return output;
  }
}
