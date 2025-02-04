import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GestionnaireComponent } from './gestionnaire.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { GestionnaireAcceuilComponent } from './gestionnaire-acceuil/gestionnaire-acceuil.component';
import { GestionnaireModulesComponent } from './gestionnaire-modules/gestionnaire-modules.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GestionnaireCoursComponent } from './gestionnaire-cours/gestionnaire-cours.component';

import { GestionnaireCertificatComponent } from './gestionnaire-certificat/gestionnaire-certificat.component';
import { GestionnaireCertificatCoursComponent } from './gestionnaire-certificat-cours/gestionnaire-certificat-cours.component';
import { GestionnaireDomaineComponent } from './gestionnaire-domaine/gestionnaire-domaine.component';
import { GestionnaireChapitreComponent } from './gestionnaire-chapitre/gestionnaire-chapitre.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { GestionnaireModifierContenuCoursComponent } from './gestionnaire-modifier-contenu-cours/gestionnaire-modifier-contenu-cours.component';

import {  GestionnaireFormationComponent } from './programme-talent/formation/formation.component';
import { ModuleComponent } from './programme-talent/module/module.component';
import { FooterComponent } from './programme-talent/footer/footer.component';
import { HeaderComponent } from './programme-talent/header/header.component';
import { AnnonceComponent } from './programme-talent/annonce/annonce.component';
import { EtudiantComponent } from './programme-talent/etudiant/etudiant.component';
import { EncadrantComponent } from './programme-talent/encadrant/encadrant.component';
import { ModifEncadrantComponent } from './programme-talent/encadrant/modif-encadrant/modif-encadrant.component';
import { AjoutFormationComponent } from './programme-talent/formation/ajout-formation/ajout-formation.component';
import { ModificationFormationComponent } from './programme-talent/formation/modification-formation/modification-formation.component';
import { AjoutSeanceComponent } from './programme-talent/seance/ajout-seance/ajout-seance.component';
import { ModificationSeanceComponent } from './programme-talent/seance/modification-seance/modification-seance.component';
import { AjoutAnnonceComponent } from './programme-talent/annonce/ajout-annonce/ajout-annonce.component';
import { ModificationAnnonceComponent } from './programme-talent/annonce/modification-annonce/modification-annonce.component';
import { AjoutEncadrantComponent } from './programme-talent/encadrant/ajout-encadrant/ajout-encadrant.component';
import { GroupeEtudiantComponent } from './programme-talent/groupe-etudiant/groupe-etudiant.component';
import {  GestionnaireFormationDetailComponent } from './programme-talent/formation/formation-detail/formation-detail.component';
import {  GestionnaireDasbordProgTalentComponent } from './programme-talent/dasbord-prog-talent/dasbord-prog-talent.component';
import { ajoutModuleComponent } from './programme-talent/formation/ajout-formation/ajouterModule/ajouteModule.component';

import { CreationFormateurComponent } from './creation-formateur/creation-formateur.component';
import { FormateurEvaluationComponent } from './formateur/formateur-Evaluation/formateur-Evaluation';
import { FormateurDashboardComponent } from './formateur/formateur-dashboard/formateur-dashboard.component';
import { HeaderPrincipaleGestionnaireComponent } from './header-footer/header-principal/headerPrincipale';
import { MatIconModule } from '@angular/material/icon';




import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Import this!
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';



@NgModule({ declarations: [GestionnaireComponent, GestionnaireAcceuilComponent, GestionnaireModulesComponent, GestionnaireCoursComponent, GestionnaireCertificatComponent, GestionnaireCertificatCoursComponent, GestionnaireDomaineComponent, GestionnaireChapitreComponent, GestionnaireModifierContenuCoursComponent,
        GestionnaireDasbordProgTalentComponent,
        // -----------programme talent ---------------------------
        GestionnaireFormationComponent, ModuleComponent, FooterComponent, HeaderComponent, AnnonceComponent,
        EtudiantComponent, EncadrantComponent, ModifEncadrantComponent, AjoutFormationComponent, ModificationFormationComponent,
        AjoutSeanceComponent, ModificationSeanceComponent, AjoutAnnonceComponent, ModificationAnnonceComponent,
        AjoutEncadrantComponent, GroupeEtudiantComponent, GestionnaireFormationDetailComponent, ajoutModuleComponent,
        FormateurEvaluationComponent,
        CreationFormateurComponent,
        FormateurDashboardComponent, HeaderPrincipaleGestionnaireComponent
        // -------------------fin ----------------------------------
    ], imports: [CommonModule, RouterModule, ReactiveFormsModule, CKEditorModule, FormsModule, MatIconModule,
    BrowserModule,
    BrowserAnimationsModule, // Important for Angular Material
    MatTableModule,
    MatPaginatorModule, // Add this!
    MatSortModule,],
     providers: [provideHttpClient(withInterceptorsFromDi())] })
export class GestionnaireModule { }
