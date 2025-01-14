import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { GestionnaireServiceService } from './gestionnaire_domaine-service/gestionnaire-service.service';

@Component({
  selector: 'app-gestionnaire-domaine',
  templateUrl: './gestionnaire-domaine.component.html',
  styleUrls: ['./gestionnaire-domaine.component.css']
})
export class GestionnaireDomaineComponent {


  constructor( private domaineService: GestionnaireServiceService, private router: Router, private fb: FormBuilder ) { }

  selectedDomaineIndex:string=""
  __iconDelete__:boolean=false
  __iconVoirDomaine__:boolean= false
  __addDomaine__:boolean=false

  ondelete():void{
    this.__iconDelete__=!this.__iconDelete__
    this.__iconVoirDomaine__=false
  }

  onEdit():void{
    this.__iconVoirDomaine__=false
    this.__iconDelete__=false
  }


  onVoirDomaine():void{
    this.__iconVoirDomaine__=!this.__iconVoirDomaine__
    this.__iconDelete__=false
  }


  selecterDomaine(domaine:string){
    this.__iconVoirDomaine__=true
    this.__iconDelete__=false
    this.selectedDomaineIndex=domaine
      
  }

  OnAdd():void{
    this.__addDomaine__=!this.__addDomaine__
  }


  __domaines__: any[] = [];

  
  

  
  loadDomaines(): void {
    this.domaineService.getDomaines().subscribe(data => {
      this.__domaines__ = data;
    });
  }
   







  onSelectDomaine(domaineId: string): void {
    this.router.navigate([`/gestionnaire/${domaineId}/Gestionnaire-modules`]); // Redirection vers la page des matières du domaine sélectionné
  }





  DomaineForm!: FormGroup;

  InitFormDomain(): void {
    this.DomaineForm = this.fb.group({ 
      nom_domaine: '',
    });
  }

  onSubmit(){
  const domaine = this.DomaineForm.value;
  this.domaineService.addDomaine(domaine).subscribe(
    response => {
      console.log('domaine ajouté:', response);
    },
    error => {
      console.error('Erreur lors de l\'ajout du domaine:', error);
    }
  );
  
  this.OnAdd();
  this.loadDomaines();
 
}





ngOnInit(): void {
  this.loadDomaines();
  this.InitFormDomain()
}


}
