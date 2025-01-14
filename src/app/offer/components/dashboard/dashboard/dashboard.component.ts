
import { Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
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

  constructor(
    private overlayContainer: OverlayContainer, 
    private el: ElementRef,
  ) {}

  /**
   * Déconnexion de l'utilisateur
   */
  logout(): void {
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