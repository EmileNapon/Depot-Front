import { Component, OnDestroy, AfterViewInit, ElementRef } from '@angular/core';

interface MenuItem {
  label: string;
  icon: string;
  route?: string; // Facultatif, car certains éléments n'ont pas de route
  children?: MenuItem[]; // Facultatif, car certains éléments n'ont pas d'enfants
}

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css'],
    standalone: false
})
export class MenuComponent implements OnDestroy, AfterViewInit {

  menuItems: MenuItem[] = [
    
    { 
      label: 'Tableau de bord', 
      icon: 'dashboard', 
      route: 'dashboard',
      children: [
        { label: 'Statistiques', icon: 'bar_chart', route: 'stats-offer' },
        { label: 'Dernières activités', icon: 'history', route: 'last-activities' },
      ]
    },

    
    {
      label: 'Gestion des offres',
      icon: 'business_center',
      children: [
        { 
          label: 'Liste des offres', 
          icon: 'list_alt',
          children: [
            { label: 'En cours', icon: 'hourglass_top', route: 'list-offers/Open' },
            { label: 'En attente', icon: 'hourglass_empty', route: 'list-offers/Pending' },
            { label: 'Fermé', icon: 'lock', route: 'list-offers/Closed' },
          ] 
        },
        { label: 'Créer une offre', 
          icon: 'post_add',
          children: [
            { label: 'Stage', icon: 'work', route: 'create-offer/Internship' },
            { label: 'Emploi', icon: 'work_outline', route: 'create-offer/Job' },
          ]
         },
      ]
    },
    {
      label: 'Candidatures',
      icon: 'people',
      children: [
        { label: 'Pour stage en cours', 
          icon: 'assignment',
          children: [
            { label: 'En attente', icon: 'hourglass_empty', route: 'in-pending' },
            { label: 'Acceptées', icon: 'check_circle', route: 'in-accepted' },
            { label: 'Refusées', icon: 'highlight_off', route: 'in-rejected' },
          ]
         },

        { label: 'Pour emploi en cours', 
          icon: 'assignment',
          children: [
            { label: 'En attente', icon: 'hourglass_empty', route: 'in-pending' },
            { label: 'Acceptées', icon: 'check_circle', route: 'in-accepted' },
            { label: 'Refusées', icon: 'highlight_off', route: 'in-rejected' },
          ]
        },
      ]
    },
    {
      label: 'Statistiques et rapports',
      icon: 'analytics',
      children: [
        { label: 'Graphiques', icon: 'insert_chart', route: 'list/offers/jobs' },
        { label: 'Export', icon: 'file_download', route: '/internships' },
      ]
    },
    {
      label: 'Paramètres',
      icon: 'settings',
      children: [
        { label: 'Profil de l\'entreprise', icon: 'business', route: 'company-profile' },
        { label: 'Préférences de notification', icon: 'notifications', route: 'notification-settings' },
        { label: 'Gestion des utilisateurs', icon: 'group', route: 'user-management' },
        { label: 'Sécurité', icon: 'lock', route: 'security-settings' },
      ]
    },
  ];

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    // Vous pouvez ajouter ici des initialisations supplémentaires si nécessaire
  }

  ngOnDestroy(): void {
    // Nettoyage des tooltips
    const tooltips = this.el.nativeElement.querySelectorAll('.mat-tooltip');
    tooltips.forEach((tooltip: HTMLElement) => {
      this.el.nativeElement.removeChild(tooltip);
    });
  }
}