import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import{HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component'



@NgModule({
  declarations: [

  
    LoginComponent
  ],
  imports: [
    CommonModule, ReactiveFormsModule, RouterModule, HttpClientModule, ReactiveFormsModule 
  ]
})
export class ModuleAdministrationModule { }
