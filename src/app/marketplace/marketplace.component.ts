import { Component, OnInit } from '@angular/core';
import { Listing } from '../models/listing.model';
import { Category } from '../models/category.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.css']
})
export class MarketplaceComponent {

  constructor(private router: Router){}

  goToDetailPage(clickedListing: Listing) {
     this.router.navigate(['listings', clickedListing.id]);
   };

  listings: Listing[] = [
    new Listing('http://www.lebenslustiger.com/serendipity/uploads/GreyKnitBunny.jpg', 'cute knit bunny', 'Art & Collectibles', 6, "2-3 weeks", '1'),
    new Listing('http://www.wvpottery.com/handmadepottery/serving-dish-gg.jpg', 'decorative ceramic dish', 'Art & Collectibles', 89, "6 weeks", '2'),
    new Listing('http://ny-image3.etsy.com/il_fullxfull.56055027.jpg', 'handmade t-shirt with carrots on it for kids', 'Clothing & Shoes', 12, "1 week", '3'),
  ]



}
