import { HttpClient } from '@angular/common/http';
import { AuthService } from '../gestion-utilisateurs/connexion/service-connexion/service-connexion.service';
import { ServiceConnexionPrincipale } from '../service-connexion-etudiant-principale.service';
import { Component, HostListener, OnInit } from '@angular/core';

import { FormBuilder, FormGroup } from '@angular/forms';

import { DomaineService } from '../module-formation-certification/acceuil-formation/acceuil-formation-services/acceuil-formations-services';

@Component({
    selector: 'app-acceuil',
    templateUrl: './acceuil.component.html',
    styleUrls: ['./acceuil.component.css'],
    standalone: false
})
export class AcceuilComponent implements OnInit{
  constructor(private domaineService: DomaineService, private fb: FormBuilder ,private authService: AuthService, private ServiceConnexion: ServiceConnexionPrincipale, private http: HttpClient) {}
  myf!:FormGroup
  showSearch = false;
  userEmail: string | null = null;
  domaines:any[]=[]

  userInfo: { email: string | null, firstName: string | null, lastName: string | null, profilePic: string | null } | null = null;

ngOnInit():void{
  this.userInfo = this.authService.getUserInfo();



  ///////////////////////////////////

  this.myf = this.fb.group({
    nom_domaine:''
  });

  //////////////////////////////////////////////
  this.loadDomaines()
}

  onLogout(): void {
    this.authService.logout();
  }



  toggleSearch() {
    this.showSearch = !this.showSearch;
  }

  isFixed: boolean = false;



  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollOffset = 20;  // Distance de défilement avant que la navbar ne devienne fixe

    // Ajouter la classe fixed si l'utilisateur a défilé au-delà du seuil
    if (window.pageYOffset > scrollOffset) {
      this.isFixed = true;
    } else {
      this.isFixed = false;
    }
  }


//hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh

loadDomaines(): void {
  this.domaineService.getDomaines().subscribe(data => {
    this.domaines = data;
  });
}



  }

