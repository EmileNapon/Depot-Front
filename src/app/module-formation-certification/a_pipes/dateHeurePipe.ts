import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
    name: 'customDateTime',
    standalone: false
})
export class CustomDateTimePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(value: string | Date): SafeHtml {
    const jours = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
    const mois = [
      'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
      'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
    ];

    const date = new Date(value);

    const jourSemaine = jours[date.getDay()];
    const jourMois = date.getDate();
    const moisNom = mois[date.getMonth()];
    const annee = date.getFullYear();
    const heures = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, '0');

    // HTML structuré
    const formattedHTML = `
      <div class="date-time-box">
        <!-- Date et jour -->
        <div class="date-info">
          <i class="bi bi-calendar3 text-success"></i>
          <span class="fw-bold text-uppercase">${jourSemaine}</span>
          <span class="date-large">
            <strong>${jourMois}</strong> <span class="badge bg-danger">${moisNom}</span> ${annee}
          </span>
        </div>
        <!-- Heure -->
        <div class="time-info">
          <span class="text-uppercase">À partir de</span>
          <span class="time-large">
            <strong>${heures}H${minutes}</strong>
          </span>
        </div>
      </div>
    `;

    // Sécuriser le HTML pour Angular
    return this.sanitizer.bypassSecurityTrustHtml(formattedHTML);
  }
}
