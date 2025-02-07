import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Service } from './service/service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/gestion-utilisateurs/connexion/service-connexion/service-connexion.service';
import { FormationService } from '../../../services/formation.service';
import { Formation } from '../../../models/tousModel';


declare var FlutterwaveCheckout: any;

@Component({
    selector: 'app-inscription-pragra-talent',
    templateUrl: './inscription-pragra-talent.component.html',
    styleUrls: ['./inscription-pragra-talent.component.css'],
    standalone: false
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
      user:Number(this.userInfo.id),
      formation:Number(this.formationId),
      phone_number:['',Validators.required],
      niveau_etude: ['', Validators.required],
      domaine_etude: ['', Validators.required] 
      
    });

  
    this.loadFormations();
    

  }



  message: string = '';    // Variable pour afficher le message
  isRegistered: boolean = false

  
  onSubmit(): void {
    const userInscrit = this.registrationForm.value;
    
    this.userService.registerFormation(userInscrit).subscribe({
      next: (response) => {
        this.message = response.message;
        this.isRegistered = true; // Désactiver le bouton après inscription
        console.log('Inscription réussie:', response);
        this.router.navigate(['/dasbord-prog-talent']);
      },
      error: (error) => {
        this.message = error.error.message; // Afficher le message d'erreur du backend
        console.error('Erreur d\'inscription:', error);
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






 // Méthode appelée lors du clic  
 onFreemiumClick(event: Event) {  
  event.preventDefault(); // Empêche la redirection  
this.makePayment()
}


makePayment() {
  FlutterwaveCheckout({
    public_key: "FLWPUBK_TEST-02b9b5fc6406bd4a41c3ff141cc45e93-X",
    tx_ref: "txref-DI0NzMx13",
    amount: 2500,
    currency: "XOF",
    payment_options: "card, banktransfer, mobileMoney",
    meta: {
      source: "docs-inline-test",
      consumer_mac: "92a3-912ba-1192a",
    },
    customer: {
      email:" s@gmail.com",
      phone_number:"3333333333333",
      name:"coool",
    },
    customizations: {
      title: "Flutterwave Developers",
      description: "Test Payment",
      logo: "https://checkout.flutterwave.com/assets/img/rave-logo.png",
    },
    callback: (data: any) => {
      console.log("payment callback:", data);
    },
    onclose: () => {
      console.log("Payment cancelled!");
    }
  });
}




}
