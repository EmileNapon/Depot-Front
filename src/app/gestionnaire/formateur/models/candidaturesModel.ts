import { Utilisateur } from './UtilisateursModel';  // Assurez-vous que ce chemin est correct.
import { Offre } from './offresModel';              // Assurez-vous que ce chemin est correct.

export interface Candidature {
  id: number;                     // Identifiant unique de la candidature
  utilisateur_id: number;         // Référence à l'utilisateur qui postule
  offre_id: number;               // Référence à l'offre à laquelle l'utilisateur postule
  nom_complet: string;            // Nom complet du candidat
  email: string;                  // Email du candidat
  cv?: string;                    // Chemin vers le fichier CV (facultatif)
  lettre_motivation?: string;     // Lettre de motivation (facultatif)
  lettre_recommand?: string;      // Lettre de recommandation (facultatif, pour les bourses)
  date_postulation: string;       // Date de la postulation
  status: 'pending' | 'accepted' | 'rejected'; // Statut de la candidature (en attente, acceptée ou rejetée)
}

