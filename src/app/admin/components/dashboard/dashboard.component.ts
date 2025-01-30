import { Component, OnDestroy, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css'],
    standalone: false
})
export class DashboardComponent implements OnDestroy, AfterViewInit {

  @ViewChild('sidenav') sidenav: any;
  tooltips: any[] = [];  // Liste des tooltips à gérer

  dashboardData = {
    stats: {
      activeUsers: 1200,
      recentCourses: 45,
      jobOffers: 15,
      certificationsIssued: 340
    },
    trends: [
      { month: 'Jan', users: 200 },
      { month: 'Feb', users: 300 },
      { month: 'Mar', users: 400 },
      { month: 'Apr', users: 350 },
      { month: 'May', users: 800 },
      { month: 'Jun', users: 9000 },
      { month: 'Jul', users: 4500 },
      { month: 'Aug', users: 3800 },
      { month: 'Sep', users: 3200 },
      { month: 'Oct', users: 5000 },
      { month: 'Nov', users: 7000 },
      { month: 'Dec', users: 6000 }
    ],
    quickActions: [
      { label: 'Ajouter un cours', icon: 'add', route: '/add-course' },
      { label: 'Publier une offre', icon: 'work_outline', route: '/add-job' },
    ],
    recentOffers: [
      { title: 'Stage Développeur Angular', company: 'TechCorp', deadline: '2024-11-30' },
      { title: 'Emploi Data Scientist', company: 'DataLabs', deadline: '2024-12-05' },
    ]
  };

  public trendsData = this.dashboardData.trends.map(t => ({
    name: t.month,
    value: t.users,
  }));

  constructor(private overlayContainer: OverlayContainer, private el: ElementRef) {}

  ngAfterViewInit(): void {
    // Vous pouvez ajouter ici des tooltips ou autres fonctionnalités interactives si nécessaire.
  }

  ngOnDestroy(): void {
    // Masquer et nettoyer les tooltips
    this.tooltips.forEach(tooltip => tooltip.hide(0));

    // Nettoyer les overlays s'ils existent
    const overlayContainerElement = this.overlayContainer.getContainerElement();
    overlayContainerElement.innerHTML = '';

    // Nettoyer le DOM des tooltips (si nécessaire)
    const tooltips = this.el.nativeElement.querySelectorAll('.mat-tooltip');
    tooltips.forEach((tooltip: HTMLElement) => {
      this.el.nativeElement.removeChild(tooltip);
    });
  }
}
