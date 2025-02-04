import { AuthService } from './../../../gestion-utilisateurs/connexion/service-connexion/service-connexion.service';
import { Component, OnInit } from '@angular/core';  
import { Router } from '@angular/router';  
import { PaymentService } from '../../services/payment.service';


declare var FlutterwaveCheckout: any;


@Component({  
  standalone:true,
  selector: 'app-account-selection',  
  templateUrl: './user-profile-type.component.html',  
  styleUrls: ['./user-profile-type.component.css']  
})


export class UserProfileTypeComponent implements OnInit {  

     constructor(
       private authService: AuthService, 
       private router: Router
     ) {}
   
 ngOnInit(): void {
     // S'abonner à l'état de connexion pour mettre à jour l'interface utilisateur
   
 }


  onSelectFreemium() {  
    this.router.navigate(['/signup'], { queryParams: { type: 'freemium' } });  
  }  



  onSelectPremium() {  
    this.router.navigate(['/signup'], { queryParams: { type: 'premium' } });  
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