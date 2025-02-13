import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../gestion-utilisateurs/connexion/service-connexion/service-connexion.service';
import { DasbordEtudiantService } from './service-model/dasbord-etudiant.service';
import { Inscrit } from './service-model/model';
import { FormatDatePipe } from '../module-formation-certification/a_pipes/datePipe';



@Component({
    selector: 'app-dasbord-etudiant',
    templateUrl: './dasbord-etudiant.component.html',
    styleUrls: ['./dasbord-etudiant.component.css'],
    standalone: false,
    
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
  filteredIncritsWebinar:any[]=[]
  inscritsWebinar:any[]=[]
  webinars:any[]=[]
  filteredIninscritsWebinar:any[]=[]
  filteredWebinar:any[]=[]

  constructor(private serviceAuth: AuthService, private DasbordService: DasbordEtudiantService, private router: Router) {}

  ngOnInit(): void {
    this.userInfo = this.serviceAuth.getUserInfo();
    this.loadInscrits()
    this.loadFormations()
    this.getWebinar()
    
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
    


  getWebinar(): void {
    this.DasbordService.getWebinars().subscribe(
      (data) => { 
        this.webinars = data;
        this.getWebinarInscrit();
      }
    );
  }  


  getWebinarInscrit(): void {
    this.DasbordService.getWebinarInscrit().subscribe(
      (data) => { 
        this.inscritsWebinar = data;
        this.filterWebinar()
      }
    );
  }  



  filterWebinar(): void {
    
      this.filteredIncritsWebinar= this.inscritsWebinar.filter(inscrit => inscrit.user ==this.userInfo?.id );
      this.filteredWebinar= this.webinars.filter(webinar => this.filteredIncritsWebinar.some(inscrit => inscrit.webinarId==webinar.id ));
      console.log("vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv",this.filteredWebinar )
  }




   
    

}
