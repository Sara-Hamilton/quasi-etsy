import { Component, OnInit, Input } from '@angular/core';
import { Listing } from '../models/listing.model';
import { ListingService } from '../listing.service';

@Component({
  selector: 'app-edit-listing',
  templateUrl: './edit-listing.component.html',
  styleUrls: ['./edit-listing.component.css'],
  providers: [ListingService]
})
export class EditListingComponent implements OnInit {
  @Input() selectedListing;
  currentListingObject: Listing;

  constructor(private listingService: ListingService) { }

  ngOnInit() {
    this.selectedListing.subscribe(data => this.currentListingObject = data);
  }

  updateListingInDatabase(listingToUpdate) {
    this.listingService.updateListing(listingToUpdate);
  }

}
