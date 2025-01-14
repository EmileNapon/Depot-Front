import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OfferListComponent } from './components/offer-list/offer-list.component';
import { OfferDetailsComponent } from './components/offer-details/offer-details.component';
import { OfferApplicationComponent } from './components/offer-application/offer-application.component';

const routes: Routes = [
  {
    path: '', component: OfferListComponent,
  },
  {
    path: 'details/:id', component: OfferDetailsComponent,
  },
  {
    path: 'application/:id', component: OfferApplicationComponent,
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OfferRoutingModule { }
