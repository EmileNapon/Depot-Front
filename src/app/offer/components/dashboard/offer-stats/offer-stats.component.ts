import { Component } from '@angular/core';

@Component({
    selector: 'app-stats-offer',
    templateUrl: './offer-stats.component.html',
    styleUrls: ['./offer-stats.component.css'],
    standalone: false
})
export class OfferStatsComponent {
  // Données pour le graphique en camembert
  pieChartData = [
    { name: 'Offre A', value: 120 },
    { name: 'Offre B', value: 80 },
    { name: 'Offre C', value: 60 },
    { name: 'Offre D', value: 40 },
  ];

  // Données pour le graphique en ligne
  lineChartData = [
    {
      name: 'Candidatures',
      series: [
        { name: 'Jan', value: 65 },
        { name: 'Fév', value: 59 },
        { name: 'Mar', value: 80 },
        { name: 'Avr', value: 81 },
        { name: 'Mai', value: 56 },
        { name: 'Juin', value: 55 },
        { name: 'Juil', value: 40 },
      ],
    },
  ];

  // Schéma de couleurs
  colorScheme = {
    domain: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
  };
}