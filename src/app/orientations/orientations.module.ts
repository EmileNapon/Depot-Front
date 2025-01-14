import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrientationsComponent } from './orientations.component';
import { OrientationAcceuilComponent } from './orientation-acceuil/orientation-acceuil.component';
import { EtablissementsComponent } from './etablissements/etablissements.component';
import { RouterModule } from '@angular/router';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';

import {FooterComponent} from './header-footer/footer/footer.component'

@NgModule({
  declarations: [
    OrientationsComponent,EtablissementsComponent, OrientationAcceuilComponent, FooterComponent
  ],
  imports: [
    CommonModule, RouterModule, MatDividerModule, MatIconModule, 
  ]
})
export class OrientationsModule { }
