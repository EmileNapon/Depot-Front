
export class OfferApplication {
  offer: string; 
  candidat: string ;
  application_date: Date; 
  status: string
  message: string; // Message de motivation, initialisé avec un message par défaut
  last_updated: Date;
  submitted_documents_ids: string[];
  created_at: Date;

  constructor(
    offer: string,  
    candidat: string ,
    created_at:Date=new Date(),  
    submitted_documents_ids: string[], 
    application_date: Date = new Date(),  
    status: 'Pending' | 'Accepted' | 'Rejected' | 'In Review' = 'Pending',  
    last_updated: Date = new Date(),  
    message: string = "Je suis très intéressé(e) par cette offre et je suis convaincu(e) que mes compétences et mon expérience correspondent aux attentes de votre entreprise. J'aimerais avoir l'opportunité de discuter de cette offre plus en détail et de contribuer au succès de votre équipe."
  ) {  
    this.offer = offer;  
    this.candidat = candidat; 
    this.created_at=created_at; 
    this.submitted_documents_ids = submitted_documents_ids;
    this.application_date = application_date;  
    this.status = status;  
    this.last_updated = last_updated;  
    this.message = message; // Utilisation du message de motivation par défaut
  }

}
