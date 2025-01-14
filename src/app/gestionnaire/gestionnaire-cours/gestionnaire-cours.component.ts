import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GestionnairesCoursServiceService } from './gestionnaires-cours-service/gestionnaires-cours-service.service';

@Component({
  selector: 'app-gestionnaire-cours',
  templateUrl: './gestionnaire-cours.component.html',
  styleUrls: ['./gestionnaire-cours.component.css']
})
export class GestionnaireCoursComponent implements OnInit{

  constructor(private coursService: GestionnairesCoursServiceService,  private fb: FormBuilder, private router: ActivatedRoute, private route:Router) { }
  selectedCoursIndex:string=""
  __iconDelete__:boolean=false
  __iconVoirCours__:boolean= false
  __addCours__:boolean=false

  ondelete():void{
    this.__iconDelete__=!this.__iconDelete__
    this.__iconVoirCours__=false
  }




  onVoirCours():void{
    this.__iconVoirCours__=!this.__iconVoirCours__
    this.__iconDelete__=false
  }


  selecterDomaine(cours:string){
    this.__iconVoirCours__=true
    this.__iconDelete__=false
    this.selectedCoursIndex=cours
      
  }

  OnAdd():void{
    this.__addCours__=!this.__addCours__
    this.__iconDelete__=false
    this.__iconVoirCours__= false
  }


  idmoduleGestionnaireId: string | null = null;
  __coursGestionnaire__: any[] = [];
  __filteredCoursGestionnaire__: any[] = [];
 
  
  
  ngOnInit(): void {
    this.idmoduleGestionnaireId = this.router.snapshot.paramMap.get('idmoduleGestionnaireId');
    this.loadCoursgestionnaire();
    this.InitFormCours()
  }
  
  loadCoursgestionnaire(): void {
    this.coursService.getCours().subscribe(data => {
      this.__coursGestionnaire__ = data;
      this.filterMatieresGestionnaire()
      console.log( this.idmoduleGestionnaireId)
    });
  }



  filterMatieresGestionnaire(): void {
    if (this.idmoduleGestionnaireId) {
      this.__filteredCoursGestionnaire__ = this.__coursGestionnaire__.filter(cours => cours.module == this.idmoduleGestionnaireId);
    }
  }


  onSelectgestionnaireCours(coursGestionnaireId: string): void {
    this.route.navigate([`/gestionnaire/${coursGestionnaireId}/gestionnaire-chapitre`]); // Redirection vers la page des matières du domaine sélectionné
 
  }





  CoursForm!: FormGroup;

  InitFormCours(): void {
    this.CoursForm = this.fb.group({ 
      nom_cours: '',
    });
  }


  ajouterNouvelleMatiere(matiereNom: string): void {
    if (this.idmoduleGestionnaireId) {
    const nouvelleMatiere = {
        // Le nom ou autre attribut de la nouvelle matière
        module: this.idmoduleGestionnaireId,  // Associer la matière au domaine sélectionné
        nom_cours:matiereNom,
    }
    

      this.coursService.addCours(nouvelleMatiere).subscribe(response => {
        console.log('Nouvelle matière ajoutée avec succès', response);
        
        // Optionnel : Actualiser la liste des matières après ajout
        this.filterMatieresGestionnaire();
      });
    } else {
      console.error('Aucun domaine sélectionné');
    }
  }
  





 

  onSubmit(){
    const nom_cours= this.CoursForm.value.nom_cours;
    console.log(nom_cours)
    this.ajouterNouvelleMatiere(nom_cours)
    this.loadCoursgestionnaire()
    this.OnAdd();
   
  }



  
}
