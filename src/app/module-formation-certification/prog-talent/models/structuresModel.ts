export interface Structure {
    id: number;                   // Identifiant unique
    nom: string;                  // Nom de la structure
    type: 'entreprise' | 'organisation' | 'universite' | 'autre';  // Type de structure
    description: string;          // Description de la structure
    secteur: string;              // Secteur d'activité
    adresse: string;              // Adresse de la structure
    site_web: string;             // Site web officiel
    contact_email: string;        // Email de contact
    contact_telephone?: string;   // Numéro de téléphone (optionnel)
  }
  