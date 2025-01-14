import { Component, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnDestroy{

  @ViewChild('sidenav') sidenav: any;
  tooltips: any[] = [];  // Liste des tooltips à gérer

  user = {
    isLoggedIn: true,
    avatarUrl: '',
    name: 'Tegawende',
    notifications: 5,
    messages: 3
  };

  constructor(
    private overlayContainer: OverlayContainer, 
    private authService: AuthService,
    private el: ElementRef,
  ) {}

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

  logout(): void{
    this.authService.logout();
  }
}