import { Structure } from './structuresModel'; 
// Assurez-vous que ce chemin est correct.

export interface Offre {
  id: number;                   // Identifiant unique de l'offre
  structure_id: number;         // Identifiant de la structure liée
  type: 'emploi' | 'stage' | 'formation' | 'bourse';  // Type de l'offre
  titre: string;                // Titre de l'offre
  description: string;          // Description de l'offre
  localisation: string;         // Localisation de l'offre
  date_debut?: string;          // Date de début (optionnelle)
  date_limite?: string;         // Date limite de postulation
  remuneration?: string;        // Rémunération pour l'offre (optionnelle)
  recruteur: string;            // Nom du recruteur ou organisme
  image?: string;               // Image associée à l'offre (optionnelle)
  lien_officiel?: string;       // Lien officiel de l'offre (optionnel)
  duration?: string;            // Durée de l'offre (stage, emploi ou formation)
  niveau_etudes?: string;       // Niveau d'études requis (optionnel)
  montant_bourse?: string;      // Montant de la bourse (pour les bourses)
  secteur?: string;             // Secteur d'activité
}
