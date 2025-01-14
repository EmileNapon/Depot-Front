
import { FieldType, Resource } from "../models/resource.model";

export const ressources: { [resourceType: string]: { resource: Resource } } = {
users: {
  resource: {
    model: "User",
    options: {
      parent: { label: "Utilisateurs", icon: "People" },
      properties: {
        showProperties: [
          {
            label: "Nom",
            name: "nom",
            type: FieldType.TEXT,
            required: true,
            placeholder: "Entrez le nom",
            tooltip: "Nom de l'utilisateur",
            errorMessage: "Le nom est requis."
          },
          {
            label: "Prénom",
            name: "prenom",
            type: FieldType.TEXT,
            required: true,
            placeholder: "Entrez le prénom",
            tooltip: "Prénom de l'utilisateur",
            errorMessage: "Le prénom est requis."
          },
          {
            label: "Email",
            name: "email",
            type: FieldType.EMAIL,
            required: true,
            placeholder: "Entrez l'email",
            tooltip: "Adresse email valide",
            errorMessage: "L'email est requis et doit être valide."
          },
          {
            label: "Téléphone",
            name: "phone_number",
            type: FieldType.TEL,
            pattern: "^\\+?[1-9][0-9]{1,14}$",
            tooltip: "Numéro de téléphone valide",
            errorMessage: "Le numéro de téléphone doit respecter le format international."
          },
          {
            label: "Rôle",
            name: "role",
            type: FieldType.TEXT,
            required: true,
            placeholder: "Entrez le rôle de l'utilisateur",
            tooltip: "Rôle de l'utilisateur",
            errorMessage: "Le rôle est requis."
          }
        ],
        listProperties: [
          { label: "Identifiant", name: "id", type: FieldType.TEXT, disabled: true },
          { label: "Nom", name: "nom", type: FieldType.TEXT },
          { label: "Prénom", name: "prenom", type: FieldType.TEXT },
          { label: "Email", name: "email", type: FieldType.EMAIL },
          { label: "Téléphone", name: "phone_number", type: FieldType.TEL },
          { label: "Rôle", name: "role", type: FieldType.TEXT }
        ],
        filterProperties: [
          { label: "Nom", name: "nom", type: FieldType.TEXT },
          { label: "Prénom", name: "prenom", type: FieldType.TEXT },
          { label: "Email", name: "email", type: FieldType.EMAIL }
        ],
        editProperties: [
          {
            label: "Nom",
            name: "nom",
            type: FieldType.TEXT,
            required: true,
            tooltip: "Nom de l'utilisateur",
            errorMessage: "Le nom est requis."
          },
          {
            label: "Prénom",
            name: "prenom",
            type: FieldType.TEXT,
            required: true,
            tooltip: "Prénom de l'utilisateur",
            errorMessage: "Le prénom est requis."
          },
          {
            label: "Email",
            name: "email",
            type: FieldType.EMAIL,
            required: true,
            tooltip: "Adresse email valide",
            errorMessage: "L'email est requis et doit être valide."
          },
          {
            label: "Mot de passe",
            name: "password",
            type: FieldType.PASSWORD,
            required: true,
            minLength: 8,
            maxLength: 20,
            tooltip: "Mot de passe sécurisé",
            errorMessage: "Le mot de passe doit comporter entre 8 et 20 caractères."
          },
          {
            label: "Téléphone",
            name: "phone_number",
            type: FieldType.TEL,
            pattern: "^\\+?[1-9][0-9]{1,14}$",
            tooltip: "Numéro de téléphone valide",
            errorMessage: "Le numéro de téléphone doit respecter le format international."
          },
          {
            label: "Rôle",
            name: "role",
            type: FieldType.TEXT,
            required: true,
            tooltip: "Rôle de l'utilisateur",
            errorMessage: "Le rôle est requis."
          }
        ]
      }
    }
  }
}
};
