import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon'; // Optionnel, si vous utilisez des icônes
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {FooterComponent} from "./components/header-footer/footer/footer.component"
import { OfferRoutingModule } from './offer-routing.module';
import { OfferComponent } from './components/offer/offer.component';
import { OfferListComponent } from './components/offer-list/offer-list.component';
import { OfferDetailsComponent } from './components/offer-details/offer-details.component';
import { OfferApplicationComponent } from './components/offer-application/offer-application.component';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [
    OfferComponent,
    OfferListComponent,
    OfferDetailsComponent,
    OfferApplicationComponent,
    FooterComponent
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressBarModule,
    MatCheckboxModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    MatSnackBarModule,
    MatIconModule, // Optionnel
    MatProgressSpinnerModule,

    OfferRoutingModule, MatDividerModule, MatIconModule
  ],
  exports: [
    OfferComponent,
    OfferListComponent,
    OfferDetailsComponent,
    OfferApplicationComponent

  ],
})
export class OfferModule { }
