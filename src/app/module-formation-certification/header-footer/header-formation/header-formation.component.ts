import { Component, HostListener, OnInit } from '@angular/core';
import { AuthService } from 'src/app/gestion-utilisateurs/connexion/service-connexion/service-connexion.service';

@Component({
  selector: 'app-header-formation',
  templateUrl: './header-formation.component.html',
  styleUrls: ['./header-formation.component.css']
})
export class HeaderFormationComponent implements OnInit {

  constructor(private authService: AuthService) {}

  showSearch = false;
  userEmail: string | null = null;

  userInfo: { email: string | null, firstName: string | null, lastName: string | null, profilePic: string | null } | null = null;

ngOnInit():void{
  this.userInfo = this.authService.getUserInfo();
}

  onLogout(): void {
    this.authService.logout();
  }



  toggleSearch() {
    this.showSearch = !this.showSearch;
  }

  isFixed: boolean = false;




}
