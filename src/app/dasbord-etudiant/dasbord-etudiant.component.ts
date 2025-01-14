import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../gestion-utilisateurs/connexion/service-connexion/service-connexion.service';
import { DasbordEtudiantService } from './service-model/dasbord-etudiant.service';
import { Inscrit } from './service-model/model';



@Component({
  selector: 'app-dasbord-etudiant',
  templateUrl: './dasbord-etudiant.component.html',
  styleUrls: ['./dasbord-etudiant.component.css']
})
export class DasbordEtudiantComponent {


  filteredIncrits: any[]=[]
  filteredIncritsFormations:any[]=[]
  inscrits: any[]=[]
  formations : any[]=[]
  formationId!: number;
  userEmail: string | null = null;
  isDisabled = true;
  user!:number
  userInfo: { email: string | null, firstName: string | null, lastName: string | null, profilePic: string | null, id:string | null } | null = null;
  isactive:boolean=false

  constructor(private serviceAuth: AuthService, private DasbordService: DasbordEtudiantService, private router: Router) {}

  ngOnInit(): void {
    this.userInfo = this.serviceAuth.getUserInfo();
    this.loadInscrits()
    this.loadFormations()
    
  }

  loadInscrits(): void {
    this.DasbordService.getInscrits().subscribe(
      (data) => { 
        this.inscrits = data;
        console.log(this.inscrits)
      }
    );
  }  

  loadFormations(): void {
    this.DasbordService.getFormations().subscribe(
      (data) => { 
        this.formations = data;
        this.filterData();
      }
    );
  }  

  filterData(): void {
    
      this.filteredIncrits= this.inscrits.filter(inscrit => inscrit.user ==this.userInfo?.id );
      this.filteredIncritsFormations= this.formations.filter(formation => this.filteredIncrits.some(inscrit => inscrit.formation==formation.id ));
      console.log(this.filteredIncrits )
  }

  onSelectProgrammeTalent(DasbordFormationId: number): void {
    this.router.navigate([`/dasbord/${DasbordFormationId}/dasbord-etudiant`]); 
  }
    




   
    

}
