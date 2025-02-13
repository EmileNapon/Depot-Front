import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { ModuleFormationCertificationModule } from './module-formation-certification/module-formation-certification.module';
import { RouterModule } from '@angular/router';
import { PremiumEtudiantComponent } from './gestion-abonnements-premium/premium-etudiant/premium-etudiant.component';
import { GestionUtilisateursModule } from './gestion-utilisateurs/gestion-utilisateurs.module';
import { AcceuilFormationComponent } from './module-formation-certification/acceuil-formation/acceuil-formation.component';
import { OrientationAcceuilComponent } from './orientations/orientation-acceuil/orientation-acceuil.component';
import { EtablissementsComponent } from './orientations/etablissements/etablissements.component';
import { OrientationsModule } from './orientations/orientations.module';
import { GestionnaireModule } from './gestionnaire/gestionnaire.module';
import { FooterComponent} from './header-footer/footer/footer.component'
import{HeaderPrincipaleComponent} from './header-footer/header-principal/headerPrincipale';
import { HeaderGestionnaireComponent } from './header-footer/header-gestionnaire/header-gestionnaire.component';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth.interceptor'; // Chemin vers ton intercepteur
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DasbordEtudiantComponent } from './dasbord-etudiant/dasbord-etudiant.component';
import { OfferModule } from './offer/offer.module';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormatDatePipe } from './module-formation-certification/a_pipes/datePipe';



@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,PremiumEtudiantComponent, HeaderPrincipaleComponent, HeaderGestionnaireComponent, DasbordEtudiantComponent, FooterComponent,
  ],
  imports: [
    BrowserModule,ReactiveFormsModule,
    BrowserAnimationsModule,  MatSlideToggleModule,
    AppRoutingModule, RouterModule, GestionUtilisateursModule, OrientationsModule, ModuleFormationCertificationModule, GestionnaireModule, OfferModule, MatDividerModule, MatIconModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
