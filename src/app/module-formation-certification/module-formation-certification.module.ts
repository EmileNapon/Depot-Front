import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import{ provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ModuleFormationCertificationComponent } from './module-formation-certification.component';
import { ContenuLibreComponent } from './contenu-libre/contenu-libre.component';
import { CertificationComponent } from './certification/certification.component';

import { CoursComponent } from './cours/cours.component';
import { AcceuilFormationComponent } from './acceuil-formation/acceuil-formation.component';
import { ModuleComponent } from './domaines-listes/domaines.component';



import { CertificationContenuComponent } from './certification-contenu/certification-contenu.component';
import { certificationContenuChapitreComponent } from './certification-contenu_chapitre/certification-contenu_chapitre';


import { HeaderFormationComponent } from '../header-footer/header-formation/header-formation.component';
import { WebinarComponent } from './webinar/components/webinar/webinar.component';
import { WebinarListComponent } from './webinar/components/webinar-list/webinar-list.component';
import { WebinarDetailsComponent } from './webinar/components/webinar-details/webinar-details.component';
import { WebinarEnrollComponent } from './webinar/components/webinar-enrollment/webinar-enrollment.component';
import { WebinarManagementComponent } from './webinar/components/webinar-management/webinar-management.component';
import { ChapitreComponent } from './chapitre/chapitre.component';

import {FooterComponent} from "./header-footer/footer/footer.component"
import { FormationDetailComponent } from './prog-talent/formation/formation-detail/formation-detail.component';
import { FormationComponent } from './prog-talent/formation/formation.component';

import { DasbordEtudiantTalentComponent } from './etudiant/dasbord-etudiant-talent/dasbord-etudiant-talent.component';
import { HeaderPrincipalePourFormationComponent } from './header-footer/header-principal/headerPrincipale';

import{CustomDateTimePipe} from './a_pipes/dateHeurePipe'
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { ChapitreQuizComponent } from './certification-contenu_chapitre/chapitre-quiz/chapitre-quiz.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { InscriptionPragraTalentComponent } from './prog-talent/formation/formation-detail/inscription-pragra-talent/inscription-pragra-talent.component';
import { FormatDatePipe } from './a_pipes/datePipe';




@NgModule({ declarations: [
        ModuleFormationCertificationComponent,
        ContenuLibreComponent,
        CertificationComponent,
        CoursComponent,
        AcceuilFormationComponent, ModuleComponent,
        certificationContenuChapitreComponent,
        HeaderFormationComponent, WebinarComponent,
        WebinarListComponent,
        WebinarDetailsComponent,
        WebinarEnrollComponent,
        WebinarManagementComponent,
        ChapitreComponent, HeaderPrincipalePourFormationComponent, CertificationContenuComponent, FooterComponent,
        FormationComponent, FormationDetailComponent, InscriptionPragraTalentComponent, DasbordEtudiantTalentComponent, FormatDatePipe,
        CustomDateTimePipe, ChapitreQuizComponent
    ], imports: [CommonModule, ReactiveFormsModule, RouterModule, FormsModule, ReactiveFormsModule, CKEditorModule, MatDividerModule, MatIconModule], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class ModuleFormationCertificationModule { }
