import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConnexionComponent } from './connexion/connexion.component';
import { RegistrationComponent } from './inscription/inscription.component';
import { ProfileComponent } from './profile/profile.component';
import { PremiumComponent } from './premium/premium.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { GestionUtilisateursComponent } from './gestion-utilisateurs.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import{HttpClientModule} from '@angular/common/http'
import { UserService } from './inscription/service-inscription/service-inscription.service';



@NgModule({
  declarations: [
    
  
    ConnexionComponent,
            RegistrationComponent,
            ProfileComponent,
            PremiumComponent,
            ForgotPasswordComponent,
            GestionUtilisateursComponent
  ],
  imports: [
    CommonModule, ReactiveFormsModule, RouterModule, HttpClientModule
  ],
 providers:[UserService]

})
export class GestionUtilisateursModule { }
