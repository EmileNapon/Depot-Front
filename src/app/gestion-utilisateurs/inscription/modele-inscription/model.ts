export interface User {
    id?:number;
    nom: string;
    prenom: string;
    email: string;
    password: string;
    phone_number: string;
    role: 'apprenant' | 'employeur';
    profile_pic?: File | string; // Photo de profil, peut être un fichier ou une URL
    is_active: boolean; // Statut de l'utilisateur (actif ou non)
    is_staff: boolean; // Si l'utilisateur est un administrateur
  }
  
