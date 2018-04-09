import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Listing } from '../models/listing.model';
import { Router } from '@angular/router';
import { ListingService } from '../listing.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers: [ListingService]
})
export class CategoryComponent implements OnInit {
  listings: FirebaseListObservable<any[]>;
  filterByCategory: string = "";

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private listingService: ListingService
  ) { }

  ngOnInit() {
    this.listings = this.listingService.getListings();
    this.route.params.forEach((urlParameters) => {
     this.filterByCategory = urlParameters['category'];
   });
  }

}
