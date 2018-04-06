import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MarketplaceComponent } from './marketplace/marketplace.component';
import { ListingDetailComponent } from './listing-detail/listing-detail.component';
import { NewListingComponent } from './new-listing/new-listing.component';
import { EditListingComponent } from './edit-listing/edit-listing.component';

const appRoutes: Routes = [
  {
    path: '',
    component: MarketplaceComponent
  },
  {
    path: 'listings/:id',
    component: ListingDetailComponent
  },
  {
    path: 'new',
    component: NewListingComponent
  },
  {
    path: 'edit/:id',
    component: EditListingComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
