import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { ChapitreService } from './chapitre-service/chapitre.service';
import DOMPurify from 'dompurify';
@Component({
    selector: 'app-chapitre',
    templateUrl: './chapitre.component.html',
    styleUrls: ['./chapitre.component.css'],
    standalone: false
})
export class ChapitreComponent implements OnInit {

  constructor(private chapitreService: ChapitreService, private route: Router,private router: ActivatedRoute) { }
  
  currentIndex = 0;
  chapitreId: string | null = null;
  chapitre: any[] = [];
  section: any[] = [];
  chapitreFiltres: any[] = [];
  sectionFiltres:any[]=[]
  Contenus:any[]=[]
  ContenusFiltres:any[]=[]

  ngOnInit(): void {
    // Récupérer l'ID du domaine à partir de l'URL
    this.chapitreId = this.router.snapshot.paramMap.get('chapitreId');
    this.loadChapitres();
  }

  loadChapitres(): void {
    this.chapitreService.getChapitre().subscribe(data => {
      this.chapitre = data;
      this.loadSections(); // Filtrer les matières en fonction de l'ID du domaine
    });
  }

  loadSections(): void {
    this.chapitreService.getSection().subscribe(data => {
      this.section = data;
      console.log(".......", this.section)
      this.loadContenu();
    });
  }


  loadContenu(): void {
    this.chapitreService.getContenu().subscribe(data => {
      this.Contenus = data;
      this.filterData(); // Filtrer les matières en fonction de l'ID du domaine
    });
  }


  filterData(): void {
    if (this.chapitreId) {  
      this.chapitreFiltres = this.chapitre.filter(chapitre => chapitre.cours == this.chapitreId)
      .map(chapit => {
        // Supprimer les balises <p> et </p> avant la sanitisation
        const titre = chapit.titre.replace(/<\/?p>/g, '');
        const id = chapit.id
        return {
          titre: DOMPurify.sanitize(titre), id:id
        };
      });
      this.sectionFiltres = this.section.filter(section => this.chapitreFiltres.some(chapitre =>chapitre.id==section.chapitre))
      .map(section => {
        // Supprimer les balises <p> et </p> avant la sanitisation
        const nom_section = section.nom_section.replace(/<\/?p>/g, '');
        const id = section.id;
        const chapitre = section.chapitre
        return {
          nom_section: DOMPurify.sanitize(nom_section), id:id, chapitre: chapitre
        };
      });
      console.log('~~~~~~~~~~~~~~~~~~~',this.sectionFiltres)
      this.ContenusFiltres = this.Contenus.filter(contenu => this.sectionFiltres.some(section=>section.id==contenu.section))
      .map(contenu => {
        // Supprimer les balises <p> et </p> avant la sanitisation
        const description = contenu.description.replace(/<\/?p>/g, '');
        const id = contenu.id;
        const section = contenu.id
        return {
          description: DOMPurify.sanitize(description), id:id, section:section
        };
      });

    }
  }

    
  nextChapter(): void {
    if (this.currentIndex < this.chapitreFiltres.length - 1) {
      this.currentIndex++;
    }
  }

  // Méthode pour reculer d'un chapitre
  prevChapter(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  // Obtenir le chapitre actuel
  get currentChapitre(): string {
    return this.chapitreFiltres[this.currentIndex];
  }


}
