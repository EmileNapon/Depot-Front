import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ResourceListComponent } from './components/resource-list/resource-list.component';
import { ResourceCreateComponent } from './components/resource-create/resource-create.component';
import { ResourceEditComponent } from './components/resource-edit/resource-edit.component';
import { ResourceDetailsComponent } from './components/resource-details/resource-details.component';
import { GestionnaireDomaineComponent } from '../gestionnaire/gestionnaire-domaine/gestionnaire-domaine.component';
import { GestionnaireModulesComponent } from '../gestionnaire/gestionnaire-modules/gestionnaire-modules.component';
import { GestionnaireCoursComponent } from '../gestionnaire/gestionnaire-cours/gestionnaire-cours.component';
import { GestionnaireChapitreComponent } from '../gestionnaire/gestionnaire-chapitre/gestionnaire-chapitre.component';
import { GestionnaireModifierContenuCoursComponent } from '../gestionnaire/gestionnaire-modifier-contenu-cours/gestionnaire-modifier-contenu-cours.component';
import { GestionnaireCertificatComponent } from '../gestionnaire/gestionnaire-certificat/gestionnaire-certificat.component';
import { GestionnaireCertificatCoursComponent } from '../gestionnaire/gestionnaire-certificat-cours/gestionnaire-certificat-cours.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },  // Redirection vers dashboard si l'URL est vide
      { path: 'dashboard', component: DashboardComponent,},
      { path: 'list/:resourceType', component: ResourceListComponent },
      { path: 'list/:resourceType/:resourceChild', component: ResourceListComponent },
      { path: 'create/:resourceType', component: ResourceCreateComponent },
      { path: 'edit/:resourceType/:id', component: ResourceEditComponent },
      { path: 'details/:resourceType/:id', component: ResourceDetailsComponent },
      {path:'domaine', component:GestionnaireDomaineComponent},
      {path:':iddomaineGestionnaireId/module', component:GestionnaireModulesComponent},
      {path:':idmoduleGestionnaireId/cours', component:GestionnaireCoursComponent},
      {path:':idcoursGestionnaireId/chapitre', component:GestionnaireChapitreComponent},

      {path:'gestionnaire/:idchapitreGestionnaireId/gestionnaire-contenu', component:GestionnaireModifierContenuCoursComponent},
    
      {path:'gestionnaire/gestionnaire-certificat', component:GestionnaireCertificatComponent},
      {path:'gestionnaire/:certificatGestionnaireId/GestionnaireCertificat', component:GestionnaireCertificatCoursComponent},
    
    ]
  }
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}