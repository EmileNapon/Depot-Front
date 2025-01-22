export interface Utilisateur {
    id: number;                   // Identifiant unique de l'utilisateur
    nom: string;                  // Nom complet de l'utilisateur
    email: string;                // Adresse email de l'utilisateur
    mot_de_passe: string;         // Mot de passe (haché) de l'utilisateur
    telephone?: string;           // Numéro de téléphone (optionnel)
    role: 'candidat' | 'participant' | 'stagiaire'| 'recruteur'| 'gestionnaire'| 'admin';   // Rôle de l'utilisateur (candidat ou participant ou stagiaire ou recrutaire ou gestionnaire ou administrateur)
  }
  