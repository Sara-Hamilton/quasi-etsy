import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Listing } from '../models/listing.model';
import { ListingService } from '../listing.service';

@Component({
  selector: 'app-listing-detail',
  templateUrl: './listing-detail.component.html',
  styleUrls: ['./listing-detail.component.css'],
  providers: [ListingService]
})
export class ListingDetailComponent implements OnInit {
  listingId: number;
  listingToDisplay: Listing;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private listingService: ListingService
  ) {}

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
     this.listingId = parseInt(urlParameters['id']);
    });
    this.listingToDisplay = this.listingService.getListingById(this.listingId);
  }

}
