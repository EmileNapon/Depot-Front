import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OfferListComponent } from './components/offer-list/offer-list.component';
import { OfferDetailsComponent } from './components/offer-details/offer-details.component';
import { OfferApplicationComponent } from './components/offer-application/offer-application.component';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';
import { CreateOfferComponent } from './components/dashboard/create-offer/create-offer.component';
import { ListOfferComponent } from './components/dashboard/list-offer/list-offer.component';
import { OfferStatsComponent } from './components/dashboard/offer-stats/offer-stats.component';
import { LastActivitiesComponent } from './components/dashboard/last-activites/last-activites.component';
import { CandidatListComponent } from './components/dashboard/candidat-list/candidat-list.component';
import { Offer } from './models/offer.models';

const routes: Routes = [
  // Route par défaut (redirige vers le tableau de bord)
  { path: '', component: OfferListComponent},
  

  // Route pour le tableau de bord
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      // Route pour les statistiques des offres
      { path: 'stats-offer', component: OfferStatsComponent },

      // Route pour les dernières activités
      { path: 'last-activities', component: LastActivitiesComponent },

      // Route pour la liste des offres avec un paramètre de statut
      { path: 'list-offers/:status', component: ListOfferComponent },

      // Route pour les détails d'une offre avec un paramètre d'ID
      { path: 'details/:id', component: OfferDetailsComponent },

      // Route pour créer une offre avec un paramètre de type
      { path: 'create-offer/:type', component: CreateOfferComponent },

      // Route pour la liste des candidatures avec des paramètres optionnels
      {
        path: 'list-candidat/:offerId',
        component: CandidatListComponent,
      },
      {
        path: 'list-candidat',
        component: CandidatListComponent,
      },

      // Exemples de routes supplémentaires (commentées)
      // { path: 'company-profile', component: CompanyProfileComponent },
      // { path: 'notification-settings', component: NotificationSettingsComponent },
      // { path: 'user-management', component: UserManagementComponent },
      // { path: 'security-settings', component: SecuritySettingsComponent },
    ],
  },

  // Route pour les détails d'une offre (hors tableau de bord)
  { path: 'details/:id', component: OfferDetailsComponent },

  // Route pour postuler à une offre (hors tableau de bord)
  { path: 'application/:id', component: OfferApplicationComponent },

  // Redirection pour les routes inconnues (404)
  { path: '**', redirectTo: 'dashboard' },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OfferRoutingModule { }
