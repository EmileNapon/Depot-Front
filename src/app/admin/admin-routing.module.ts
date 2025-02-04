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
import { GestionnaireDasbordProgTalentComponent } from '../gestionnaire/programme-talent/dasbord-prog-talent/dasbord-prog-talent.component';
import { GestionnaireFormationComponent } from '../gestionnaire/programme-talent/formation/formation.component';
import { AjoutFormationComponent } from '../gestionnaire/programme-talent/formation/ajout-formation/ajout-formation.component';
import { ModificationFormationComponent } from '../gestionnaire/programme-talent/formation/modification-formation/modification-formation.component';
import { AjoutSeanceComponent } from '../gestionnaire/programme-talent/seance/ajout-seance/ajout-seance.component';
import { ModificationSeanceComponent } from '../gestionnaire/programme-talent/seance/modification-seance/modification-seance.component';
import { ModificationAnnonceComponent } from '../gestionnaire/programme-talent/annonce/modification-annonce/modification-annonce.component';
import { AjoutAnnonceComponent } from '../gestionnaire/programme-talent/annonce/ajout-annonce/ajout-annonce.component';
import { AjoutEncadrantComponent } from '../gestionnaire/programme-talent/encadrant/ajout-encadrant/ajout-encadrant.component';
import { ModifEncadrantComponent } from '../gestionnaire/programme-talent/encadrant/modif-encadrant/modif-encadrant.component';
import { GestionnaireFormationDetailComponent } from '../gestionnaire/programme-talent/formation/formation-detail/formation-detail.component';
import { ajoutModuleComponent } from '../gestionnaire/programme-talent/formation/ajout-formation/ajouterModule/ajouteModule.component';
import { CreationFormateurComponent } from '../gestionnaire/creation-formateur/creation-formateur.component';
import { EncadrantComponent } from '../gestionnaire/programme-talent/encadrant/encadrant.component';
import { ListFormateurComponent } from '../gestionnaire/formateur/list-formateur/list-formateur.component';

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
      {path: 'formation', component: GestionnaireFormationComponent},
      {path: ':dasbordId/programme-talent', component: GestionnaireDasbordProgTalentComponent},

      // {path:'gestionnaire/:idchapitreGestionnaireId/gestionnaire-contenu', component:GestionnaireModifierContenuCoursComponent},
      // {path:'gestionnaire/gestionnaire-certificat', component:GestionnaireCertificatComponent},
      // {path:'gestionnaire/:certificatGestionnaireId/GestionnaireCertificat', component:GestionnaireCertificatCoursComponent},
      
      {path: 'dasbord/:dasbordId/dasbord-prog-talent', component: GestionnaireDasbordProgTalentComponent},
      {path: 'formation', component: GestionnaireFormationComponent},
      { path: 'ajouter-formation', component: AjoutFormationComponent },
      { path: 'update/:id/formation', component: ModificationFormationComponent },
      {path: 'create-seance/:id', component: AjoutSeanceComponent},
      {path: 'modification-seance/:id', component: ModificationSeanceComponent},
      {path: 'ajouter-annonce', component: AjoutAnnonceComponent},
      {path: 'modification-annonce/:id', component: ModificationAnnonceComponent},
      {path: 'ajout-encadrant', component: AjoutEncadrantComponent},
      {path: 'formateur', component: ListFormateurComponent},
      {path: 'modification-encadrant/:id', component: ModifEncadrantComponent},
      {path: 'formation-detail/:id', component: GestionnaireFormationDetailComponent},
      {path:'Module-formation/:id_joutFormation/formation', component : ajoutModuleComponent},
      {path:'create/:id_joutFormation/:seanceId/seance', component : AjoutSeanceComponent},
      {path:'create-formateur', component:CreationFormateurComponent},
      
    ]
  }
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}