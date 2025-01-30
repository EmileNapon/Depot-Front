
import { Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { MatSidenav } from '@angular/material/sidenav';
import { AuthService } from 'src/app/gestion-utilisateurs/connexion/service-connexion/service-connexion.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css'],
    standalone: false
})
export class DashboardComponent implements OnDestroy {

  @ViewChild('sidenav') sidenav!: MatSidenav; // Référence au sidenav
  tooltips: any[] = [];  // Liste des tooltips à gérer

  // Informations de l'utilisateur (simulées)
  user = {
    isLoggedIn: true,
    avatarUrl: 'assets/images/avatar.jpeg', // Chemin vers l'avatar
    name: 'Tegawende',
    notifications: 5,
    messages: 3
  };
  userInfo: { email: string | null, firstName: string | null, lastName: string | null, profilePic: string | null } | null = null;

  constructor(
    private overlayContainer: OverlayContainer, 
    private el: ElementRef,
    private authService: AuthService
  ) {}

  ngOnInit():void{
    this.userInfo = this.authService.getUserInfo();
  }


  onLogout(): void {
    this.authService.logout();
  }


  /**
   * Nettoyage des tooltips et des overlays à la destruction du composant
   */
  ngOnDestroy(): void {
    this.tooltips.forEach((tooltip) => tooltip.hide(0));
    this.overlayContainer.getContainerElement().innerHTML = '';
    const tooltips = this.el.nativeElement.querySelectorAll('.mat-tooltip');
    tooltips.forEach((tooltip: HTMLElement) => {
      if (tooltip && tooltip.parentNode) {
        tooltip.parentNode.removeChild(tooltip);
      }
    });
  }
}