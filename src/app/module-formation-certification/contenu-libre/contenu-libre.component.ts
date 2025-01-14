import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-contenu-libre',
  templateUrl: './contenu-libre.component.html',
  styleUrls: ['./contenu-libre.component.css']
})
export class ContenuLibreComponent {


  isFixed: boolean = false;



  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollOffset = 0.5;  // Distance de défilement avant que la navbar ne devienne fixe

    // Ajouter la classe fixed si l'utilisateur a défilé au-delà du seuil
    if (window.pageYOffset > scrollOffset) {
      this.isFixed = true;
    } else {
      this.isFixed = false;
    }}


    courses= [
      {
        domain: 'Développement Web',
        title: 'Introduction au Développement Web',
        difficulty: '★★★',
        duration: '4 heures',
        description: 'Apprenez les bases du développement web avec ce cours introductif.',
      },
      // Ajoutez plus de cours ici...
    ];


  

  }


