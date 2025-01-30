import { Component, OnInit } from '@angular/core';
import { GestionnaireModifierContenuCoursService } from './gestionnaire-modifier-contenu-cours-service/gestionnaire-modifier-contenu-cours.service';
import { ActivatedRoute, Router } from '@angular/router';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import DOMPurify from 'dompurify';

@Component({
    selector: 'app-gestionnaire-modifier-contenu-cours',
    templateUrl: './gestionnaire-modifier-contenu-cours.component.html',
    styleUrls: ['./gestionnaire-modifier-contenu-cours.component.css'],
    standalone: false
})
export class GestionnaireModifierContenuCoursComponent implements OnInit{

  sous_titre: any[]=[] ;
  sous_titre_filtre: any ;
  description_filtres: any ;
  titre: any ;
  chapitre:any
  chapitre1:any
  description: any;
  contenuId: number = 1; // ID du document à éditer
  chapitreId: number = 1; // ID du document à éditer
  idchapitreGestionnaireId: string | null = null;
  constructor(private contenuService: GestionnaireModifierContenuCoursService, private router: ActivatedRoute, private route:Router) { }

  ngOnInit(): void {
    this.idchapitreGestionnaireId = this.router.snapshot.paramMap.get('idchapitreGestionnaireId');
    this.loadCoursgestionnaire();

  }

  contenus:any[]=[]
  chapitres:any[]=[]


  public Editor = ClassicEditor;

 

  __chapitreGestionnaire__:any[]=[]

  loadCoursgestionnaire(): void {
    this.contenuService.getChapitre().subscribe(data => {
      this.__chapitreGestionnaire__ = data;
      this.loadSections()
    });
  }






  section:any[]=[]
  __filteredSessionGestionnaire__:any[]=[]

  loadSections(): void {
    this.contenuService.getSection().subscribe(data => {
      this.section = data;
      this.loadContenu()
      console.log(".......", this.section)
    });
  }

  Contenus:any[]=[]
  ContenusFiltres:any[]=[]
  loadContenu(): void {
    this.contenuService.getContenu().subscribe(data => {
      this.Contenus = data;
      this.filterDataGestionnaire()
    });
  }

  __filteredChapitresGestionnaire__:any[]=[]

  filterDataGestionnaire(): void { 
    if (this.idchapitreGestionnaireId) {
      console.log('******************',this.idchapitreGestionnaireId)
      this.__filteredChapitresGestionnaire__ = this.__chapitreGestionnaire__.filter(chapitre => chapitre.cours == this.idchapitreGestionnaireId);

      this.__filteredSessionGestionnaire__ = this.section.filter(section =>this.__filteredChapitresGestionnaire__.some( chapitre =>chapitre.id ==section.chapitre));
  
      this.ContenusFiltres = this.Contenus.filter(contenu => this.__filteredSessionGestionnaire__.some(section=>section.id==contenu.section))
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
    console.log('******************',this.ContenusFiltres)
  }








  





evenementClique: string | null = null;
onElementClick(id: string) {
  this.evenementClique = id;
}




x(){
      this.ContenusFiltres = this.Contenus.filter(contenu => this.__filteredSessionGestionnaire__.some(section=>section.id==contenu.section))
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

sauvegarderContenus() {
  console.log(this.ContenusFiltres, "llllllllllllllllllllllllll")
  console.log(this.section, "llllllllllllllllllllllllll")
 this.contenuService.updateContenu(this.ContenusFiltres).subscribe(
  response => {
  console.log('Contenus sauvegardés avec succès', response);
  
},
error => {
  console.error('Erreur lors de la sauvegarde des contenus', error);
})
}

  }


