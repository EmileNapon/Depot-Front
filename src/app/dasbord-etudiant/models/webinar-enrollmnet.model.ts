export class WebinarEnrollment {
    id: string; // Identifiant unique de l'inscription
    user:string |null;
    webinarId: string; // Identifiant du webinaire associé
    email: string; // Email de l'inscrit
    registrationDate: Date; // Date d'inscription
    hasAcceptedTerms: boolean; // Indique si l'utilisateur a accepté les conditions générales
    paymentStatus?: 'paid' | 'pending' | 'free'; // Statut de paiement (facultatif)
    paymentMethod?: 'creditCard' | 'orangeMoney' | 'moovMoney' | 'sankMoney'; // Méthode de paiement (facultatif)
    isConfirmed: boolean; // Indique si l'inscription est confirmée
  
    constructor(
      id: string,
      user:string |null,
      webinarId: string,
      email: string,
      registrationDate: Date,
      hasAcceptedTerms: boolean,
      isConfirmed: boolean, 
      paymentStatus?: 'paid' | 'pending' | 'free',
      paymentMethod?: 'creditCard' | 'orangeMoney' | 'moovMoney' | 'sankMoney',
      amountPaid?: number
    ) {
      this.id = id;
      this.user=user
      this.webinarId = webinarId;
      this.email = email;
      this.registrationDate = registrationDate;
      this.hasAcceptedTerms = hasAcceptedTerms;
      this.isConfirmed = isConfirmed;
      this.paymentStatus = paymentStatus;
      this.paymentMethod = paymentMethod;
    }
  }
  