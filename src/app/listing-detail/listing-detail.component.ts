import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Listing } from '../models/listing.model';
import { ListingService } from '../listing.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listing-detail',
  templateUrl: './listing-detail.component.html',
  styleUrls: ['./listing-detail.component.css'],
  providers: [ListingService]
})
export class ListingDetailComponent implements OnInit {
  listingId: string;
  listingToDisplay;
  showEditForm: Boolean = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private listingService: ListingService
  ) {}

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
     this.listingId = urlParameters['id'];
    });
    this.listingToDisplay = this.listingService.getListingById(this.listingId);
  }

  editCurrentListing() {
    this.showEditForm = true;
  }

  deleteCurrentListingFromDatabase() {
    if(confirm("Are you sure you want to delete this listing?")){
      this.listingService.deleteListing(this.listingToDisplay);
    }
    this.router.navigate(['']);
  }

}
