import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/core/models/user.models';
import { AuthService } from 'src/app/core/services/auth.service';
declare var FlutterwaveCheckout: any;

@Component({
  selector: 'app-flwtest',
  standalone: true,
  templateUrl: './flwtest.component.html',
  styleUrls: ['./flwtest.component.css']
})
export class FlwtestComponent implements OnInit{

  isUserLoggedIn = false;
  defaultUserImage = 'assets/images/avatar.jpeg';  // Image par défaut
    user: User | null = null;  // Récupérer l'utilisateur complet
    userGroups: string[] = [];  // Récupérer les groupes de l'utilisateur
  
    constructor(
      private authService: AuthService, 
      private router: Router
    ) {}
  
ngOnInit(): void {
    // S'abonner à l'état de connexion pour mettre à jour l'interface utilisateur
   this.authService.isLoggedIn$.subscribe(isLoggedIn => {
    this.isUserLoggedIn = isLoggedIn;
    if (this.isUserLoggedIn) {
      this.user = this.authService.getUser();  // Récupérer l'utilisateur complet
      if (this.user) {
        // Récupérer l'image de l'utilisateur ou image par défaut si non définie
        this.user.image = this.user.image ?? this.defaultUserImage;
        this.userGroups = this.authService.getUserGroups();  // Récupérer les groupes de l'utilisateur
      }
    } else {
      this.user = null;
      this.userGroups = [];
    }
  });
}
   
  makePayment() {
    FlutterwaveCheckout({
      public_key: "FLWPUBK_TEST-02b9b5fc6406bd4a41c3ff141cc45e93-X",
      tx_ref: "txref-DI0NzMx13",
      amount: 2500,
      currency: "XOF",
      payment_options: "card, banktransfer, ussd",
      meta: {
        source: "docs-inline-test",
        consumer_mac: "92a3-912ba-1192a",
      },
      customer: {
        email: this.user?.email,
        phone_number: this.user?.phone,
        name:this.user?.username,
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
