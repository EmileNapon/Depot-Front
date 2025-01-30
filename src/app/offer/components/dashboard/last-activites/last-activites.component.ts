import { Component } from '@angular/core';

@Component({
    selector: 'app-last-activites',
    templateUrl: './last-activites.component.html',
    styleUrls: ['./last-activites.component.css'],
    standalone: false
})
export class LastActivitiesComponent {
  // Données simulées pour les dernières activités
  activities = [
    {
      icon: 'assignment',
      title: 'Nouvelle candidature reçue',
      description: 'John Doe a postulé à l\'offre "Développeur Full Stack".',
      timestamp: 'Il y a 2 heures'
    },
    {
      icon: 'post_add',
      title: 'Offre publiée',
      description: 'Vous avez publié une nouvelle offre : "Designer UI/UX".',
      timestamp: 'Il y a 5 heures'
    },
    {
      icon: 'edit',
      title: 'Profil mis à jour',
      description: 'Vous avez mis à jour les informations de votre entreprise.',
      timestamp: 'Il y a 1 jour'
    },
    {
      icon: 'check_circle',
      title: 'Candidature acceptée',
      description: 'Vous avez accepté la candidature de Jane Smith pour l\'offre "Chef de projet".',
      timestamp: 'Il y a 2 jours'
    }
  ];
}