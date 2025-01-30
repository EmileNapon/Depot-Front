
import { Component, HostListener, OnInit } from '@angular/core';
import { CertificationService } from './certification-service/certificationService';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/gestion-utilisateurs/connexion/service-connexion/service-connexion.service';

@Component({
    selector: 'app-certification',
    templateUrl: './certification.component.html',
    styleUrls: ['./certification.component.css'],
    standalone: false
})
export class CertificationComponent implements OnInit{
  
  userInfo: { email: string | null, firstName: string | null, lastName: string | null, profilePic: string | null } | null = null;
  ListCertificat : any[]=[]
  isFixed: boolean = false;
  constructor(private authService: AuthService, private CertificatService:CertificationService, private router: Router){}



  ngOnInit(): void {
   this.getCertification()
   this.userInfo = this.authService.getUserInfo();
  }
  onLogout(): void {
    this.authService.logout();
  }

  getCertification(){
    this.CertificatService.getCertificat().subscribe(data => {
      this.ListCertificat = data;
      console.log(this.ListCertificat)
    });
  }

  
onSelectDomaine(idCertification: string): void {
  this.router.navigate([`/certification/${idCertification}/certification`]); // Redirection vers la page des matières du domaine sélectionné
}

}
