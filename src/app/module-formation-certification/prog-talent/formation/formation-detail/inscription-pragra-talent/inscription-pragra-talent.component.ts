import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Service } from './service/service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/gestion-utilisateurs/connexion/service-connexion/service-connexion.service';
import { FormationService } from '../../../services/formation.service';
import { Formation } from '../../../models/tousModel';
@Component({
  selector: 'app-inscription-pragra-talent',
  templateUrl: './inscription-pragra-talent.component.html',
  styleUrls: ['./inscription-pragra-talent.component.css']
})
export class InscriptionPragraTalentComponent implements OnInit {

  registrationForm!: FormGroup;
  formationId!: number;
  userEmail: string | null = null;
  isDisabled = true;
  formations!: Formation;

  userInfo: { email: string | null, firstName: string | null, lastName: string | null, profilePic: string | null,id: string | null } | null = null;

  constructor(private fb: FormBuilder, private userService: Service, private router: Router,   private route: ActivatedRoute, private serviceAuth: AuthService, private formationService: FormationService,) {}

  ngOnInit(): void {
    this.formationId = this.route.snapshot.params['FormationId'];
    this.userInfo = this.serviceAuth.getUserInfo();
   
    this.registrationForm = this.fb.group({
      user:this.userInfo.id,
      formation:this.formationId,
      phone_number:['',Validators.required],
      niveau_etude: ['', Validators.required],
      domaine_etude: ['', Validators.required] 
      
    });

  
    this.loadFormations();
    

  }

  onSubmit(): void {
      const userInscrit= this.registrationForm.value;
      console.log(userInscrit)
      this.userService.registerFormation(userInscrit).subscribe({
        next: (response) => {
          console.log('User registered successfully:', response);
          this.router.navigate(['/dasbord-prog-talent']);
        },
        error: (error) => {
          console.error('Error registering user:', error);
        }
      });
    

   
    
  }








  loadFormations(): void {
    console.log(this.formationId)
    this.formationService.getFormationById(this.formationId).subscribe(
      (data) => {
        
        this.formations = data;
        //this.filterFormation();
      }
    );
  }

}
