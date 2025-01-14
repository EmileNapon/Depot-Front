export interface CustomUser {
    id: number;
    nom?: string;
    prenom?: string;
    structure?: string;
    sect_activite?: string;
    email: string; // adresse mail de l'utilisateur
    phone_number: string; // numéro de téléphone
    password: string;
    password2: string;
    role: 'etudiant' | 'employeur' | 'formateur'; // L'utilisateur peut être un étudiant, un employeur ou un formateur
    profile_pic: string; // Image de profil de l'utilisateur
}

export interface Formation {
    id: number;
    titre: string;
    type: string;
    niveau: string;
    prix: number;
    duree: string;
    nombre: string; // Nombre de places
    location: string; // Lieu de la formation
    resume: string; // Résumé de la formation
    description: string; // Description détaillée
}

export interface Group {
    id: number;
}

export interface Inscrit {
    id: number;
    formation: number; // ID de la formation
    user_id: number; // ID de l'utilisateur (CustomUser)
    date_inscript: string; // Date d'inscription
    group_id: number; // ID du groupe auquel l'utilisateur est affecté
}

export interface Domaine {
    id: number;
    nom_domaine: string; // Nom du domaine de formation
}

export interface Module {
    id: number;
    nom_module: string; // Nom du module
    code: string; // Code du module
    domaine_id: number; // ID du domaine auquel appartient le module
}

export interface ModuleFormation {
    id?: number;
    formation_id: number; // ID de la formation
    module_id: number; // ID du module
    user_id?: number; // ID de l'utilisateur (CustomUser)
}

export interface Seance {
    id: number;
    lieu: string; // Lieu de la séance
    date_formation: string; // Date de la séance
    heure_debut: string; // Heure de début de la séance
    heure_fin: string; // Heure de fin de la séance
    statut: 'Confirmé' | 'En attente' | 'Annulé'; // Statut de la séance
    ModuleFormation_id: number; // ID du lien entre le module et la formation (ModuleFormation)
    module_id: number;
}

export interface Candidature {
    id: number; // Identifiant unique de la candidature
    customUser_id: number; // Référence à l'utilisateur qui postule (ID de CustomUser)
    offre_id: number; // Référence à l'offre à laquelle l'utilisateur postule
    nom_complet: string; // Nom complet du candidat
    email: string; // Email du candidat
    cv?: string; // Chemin vers le fichier CV (facultatif)
    lettre_motivation?: string; // Lettre de motivation (facultatif)
    lettre_recommand?: string; // Lettre de recommandation (facultatif, pour les bourses)
    date_candidate: string; // Date de la candidature
    status: 'pending' | 'accepted' | 'rejected'; // Statut de la candidature
}

export interface Offre {
    id: number;
    titre: string; // Titre de l'offre
    type: 'stage' | 'emploi'; // Type de l'offre
    description: string; // Description de l'offre
    nom_beneficiaire: string; // Nom du bénéficiaire de l'offre
    date_debut: string; // Date de début de l'offre
    date_limite: string; // Date limite de candidature
    duration: string; // Durée de l'offre
    niveau: string; // Niveau requis pour l'offre
    secteur_activite: string; // Secteur d'activité
}

export interface AffectationStage {
    id: number;
    inscrit_id: number; // ID de l'inscription (Inscrit)
    offre_id: number; // ID de l'offre (Offre)
    date_affectation: string; // Date de l'affectation
}

export interface Annonce {
    id: number;
    titre: string; // Titre de l'annonce
    lieu: string; // Lieu de l'évènement
    dateCours: string; // Date de l'évènement
    description: string; // Description de l'annonce
    datePublication: string; // Date de publication de l'annonce
    heure: string; // Heure de publication
}
