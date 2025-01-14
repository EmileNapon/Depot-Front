import { DomaineService } from './acceuil-formation-services/acceuil-formations-services';
import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/gestion-utilisateurs/connexion/service-connexion/service-connexion.service';

@Component({
  selector: 'app-acceuil-formation',
  templateUrl: './acceuil-formation.component.html',
  styleUrls: ['./acceuil-formation.component.css']
})
export class AcceuilFormationComponent implements OnInit {

  isFixed: boolean = false;
  
userInfo: { email: string | null, firstName: string | null, lastName: string | null, profilePic: string | null } | null = null;
domaines: any[] = [];

constructor(private authService: AuthService, private domaineService: DomaineService, private router: Router) { }

ngOnInit(): void {
  this.loadDomaines();
  this.userInfo = this.authService.getUserInfo();
}


onLogout(): void {
  this.authService.logout();
}

loadDomaines(): void {
  this.domaineService.getDomaines().subscribe(data => {
    this.domaines = data;
  });
}

onSelectDomaine(domaineId: string): void {
  this.router.navigate([`/domaines/${domaineId}/modules`]); 
}
  



}
