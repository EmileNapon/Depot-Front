import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'formatDate',
    standalone: false
})
export class FormatDatePipe implements PipeTransform {
  transform(value: string | Date): string {
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

    return `${jourSemaine}\n${jourMois}\n${moisNom} ${annee}`;
  }
}
