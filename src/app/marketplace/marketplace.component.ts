import { Component, OnInit } from '@angular/core';
import { Listing } from '../models/listing.model';
import { Category } from '../models/category.model';
import { Router } from '@angular/router';
import { ListingService } from '../listing.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.css'],
  providers: [ListingService]
})
export class MarketplaceComponent implements OnInit {
  listings: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

  constructor(private router: Router, private listingService: ListingService) {}

  ngOnInit() {
    this.listings = this.listingService.getListings();
  }

  goToDetailPage(clickedListing) {
     this.router.navigate(['listings', clickedListing.$key]);
   };

  // listings: Listing[] = [
  //   new Listing('http://www.lebenslustiger.com/serendipity/uploads/GreyKnitBunny.jpg', 'cute knit bunny', 'Art & Collectibles', 6, "2-3 weeks", '1'),
  //   new Listing('http://www.wvpottery.com/handmadepottery/serving-dish-gg.jpg', 'decorative ceramic dish', 'Art & Collectibles', 89, "6 weeks", '2'),
  //   new Listing('http://ny-image3.etsy.com/il_fullxfull.56055027.jpg', 'handmade t-shirt with carrots on it for kids', 'Clothing & Shoes', 12, "1 week", '3'),
  // ]




}
