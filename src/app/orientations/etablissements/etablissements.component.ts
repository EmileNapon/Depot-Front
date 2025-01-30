import { Component } from '@angular/core';

@Component({
    selector: 'app-etablissements',
    templateUrl: './etablissements.component.html',
    styleUrls: ['./etablissements.component.css'],
    standalone: false
})
export class EtablissementsComponent {
  educationList = [
    {
        title: "Institut Africain des Industries Culturelles (IAIC)",
        imgSrc: "https://legrandfrere.bf/wp-content/uploads/WhatsApp-Image-2023-11-16-at-10.32.34-wpcf_380x254.jpeg",
        description: "Institut axé sur les industries culturelles en Afrique, offrant des formations dans les domaines de la culture et de l'industrie.",
        schoolType: "Institut supérieur privé",
        location: "Ouagadougou"
    },
    {
        title: "Ecole Supérieure Polytechnique de la Jeunesse (ESUP-J)",
        imgSrc: "https://legrandfrere.bf/wp-content/uploads/WhatsApp-Image-2023-11-16-at-10.31.59.jpeg",
        description: "École spécialisée dans la formation polytechnique pour la jeunesse, avec un accent sur les technologies avancées et l'innovation.",
        schoolType: "Ecole supérieure privée",
        location: "Ouagadougou"
    },
    {
        title: "Ecole supérieure des Hautes Etudes TEchnologiques et Commerciales (HETEC)",
        imgSrc: "https://legrandfrere.bf/wp-content/uploads/hetec-cover-wpcf_380x285.jpg",
        description: "École supérieure dédiée aux hautes études technologiques et commerciales, offrant des formations en ingénierie et en gestion.",
        schoolType: "Ecole supérieure privée",
        location: "Ouagadougou"
    },
    {
        title: 'Ecole Supérieure des Techniques Avancées (ESTA)',
        imgSrc: 'https://legrandfrere.bf/wp-content/uploads/IMG_0124-1-wpcf_380x175.jpg',
        description: 'École spécialisée dans les techniques avancées et les formations techniques de haut niveau.',
        schoolType: 'Ecole supérieure privée',
        location: 'Ouagadougou'
    },
    {
        title: 'Ecole Supérieure de Commerce (ESC)',
        imgSrc: 'https://legrandfrere.bf/wp-content/uploads/esc-devanture-wpcf_380x227.jpg',
        description: 'École offrant des formations en commerce, management, et administration des affaires.',
        schoolType: 'Ecole supérieure privée',
        location: 'Ouagadougou'
    },
    {
        title: 'Institut Teng Tuuma Géosciences (ITTGEO)',
        imgSrc: 'https://legrandfrere.bf/wp-content/uploads/ITTGEO-1-wpcf_380x214.jpg',
        description: 'Institut spécialisé dans les formations en géosciences et en exploration géologique.',
        schoolType: 'Ecole supérieure privée',
        location: 'Ouagadougou'
    },
    {
        title: "Institut des Sciences Techniques et Management (ISTM)",
        imgSrc: "https://legrandfrere.bf/wp-content/uploads/istm-150x105.jpg",
        description: "Institut offrant des formations dans les sciences techniques et le management.",
        schoolType: "Institut supérieur privé",
        location: "Ouagadougou"
    },
    {
        title: "Institut Superieur la Plume (ISP)",
        imgSrc: "https://legrandfrere.bf/wp-content/uploads/IS-La-Plume-150x150.jpg",
        description: "Institut supérieur spécialisé dans divers domaines d'études.",
        schoolType: "Institut supérieur privé",
        location: "Ouagadougou"
    },
    {
        title: "Université Catholique de l'Afrique de l'Ouest, Unité Universitaire d'Ucao à Bobo-Dioulasso (UCAO)",
        imgSrc: "https://legrandfrere.bf/wp-content/uploads/ucao-bobo-150x150.jpg",
        description: "Université offrant des formations variées dans un cadre catholique en Afrique de l'Ouest.",
        schoolType: "Université",
        location: "Bobo-Dioulasso"
    },
    {
        title: "Université Joseph KI-ZERBO (UJAK)",
        imgSrc: "https://legrandfrere.bf/wp-content/uploads/ujak-150x150.jpg",
        description: "Université publique offrant une large gamme de formations académiques.",
        schoolType: "Université publique",
        location: "Ouagadougou"
    },
    {
        title: "Université Ouaga I Pr Joseph KI-ZERBO",
        imgSrc: "https://legrandfrere.bf/wp-content/uploads/uo1-150x150.jpg",
        description: "Université publique renommée pour ses programmes académiques diversifiés.",
        schoolType: "Université publique",
        location: "Ouagadougou"
    },
    {
        title: "Université de Koudougou (UK)",
        imgSrc: "https://legrandfrere.bf/wp-content/uploads/uk-150x150.jpg",
        description: "Université offrant des formations variées à Koudougou.",
        schoolType: "Université",
        location: "Koudougou"
    },
    {
        title: "Université de Dédougou (UD)",
        imgSrc: "https://legrandfrere.bf/wp-content/uploads/ud-150x150.jpg",
        description: "Université offrant des formations académiques à Dédougou.",
        schoolType: "Université",
        location: "Dédougou"
    },
    {
        title: "Institut Supérieur la Plume (ISP)",
        imgSrc: "https://legrandfrere.bf/wp-content/uploads/IS-La-Plume-150x150.jpg",
        description: "Institut supérieur spécialisé dans divers domaines d'études.",
        schoolType: "Institut supérieur privé",
        location: "Ouagadougou"
    },
    {
        title: "Université Catholique de l'Afrique de l'Ouest (UCAO)",
        imgSrc: "https://legrandfrere.bf/wp-content/uploads/ucao-bobo-150x150.jpg",
        description: "Université offrant des formations variées dans un cadre catholique en Afrique de l'Ouest.",
        schoolType: "Université privée",
        location: "Bobo Dioulasso"
    },
    {
        title: "Apidon Academy of Science (2AS)",
        imgSrc: "https://legrandfrere.bf/wp-content/uploads/placeholder-image.png",  // Remplacer par l'image appropriée si disponible
        description: "Établissement non spécifié.",
        schoolType: "Institut supérieur privé",
        location: "Ouagadougou"
    },
    {
        title: "Institut des Sciences pour l’Entreprise et la Gestion/ Ecole de Formation et d’Etudes Commerciales (ISEG/EFEC)",
        imgSrc: "https://legrandfrere.bf/wp-content/uploads/efec-150x150.jpg",
        description: "Institut axé sur les sciences de l'entreprise et la gestion, avec des formations en commerce et études commerciales.",
        schoolType: "Institut supérieur privé",
        location: "Ouagadougou",
        
    },
   
        {
            "title": "Institut Supérieur Monseigneur Dieudonné YOUGBARE de Koupéla (ISMDY)",
            "imgSrc": "https://legrandfrere.bf/wp-content/uploads/cropped-favicon-512.png",
            "description": "Institut supérieur privé situé à Koupéla, offrant des formations diverses.",
            "schoolType": "Institut supérieur privé",
            "location": "Koupéla",
           
        },
        {
            "title": "Institut Panafricain des Métiers d'Avenir (IPMA)",
            "imgSrc": "https://legrandfrere.bf/wp-content/uploads/ipma-150x109.jpg",
            "description": "Institut axé sur les métiers d'avenir en Afrique, offrant des formations spécialisées.",
            "schoolType": "Institut supérieur privé",
            "location": "Ouagadougou",
           
        },
        {
            "title": "Institut des Sciences de l'Entreprise et du Management (INSEM)",
            "imgSrc": "https://legrandfrere.bf/wp-content/uploads/insem-150x95.jpg",
            "description": "Institut spécialisé dans les sciences de l'entreprise et le management.",
            "schoolType": "Institut supérieur privé",
            "location": "Ouagadougou",
            
        },
        {
            "title": "Institut Privé Online Training Center (IPOTC)",
            "imgSrc": "https://legrandfrere.bf/wp-content/uploads/ipotc-150x150.jpg",
            "description": "Institut privé spécialisé dans la formation en ligne.",
            "schoolType": "Institut supérieur privé",
            "location": "Ouagadougou",
            
        },
        {
            "title": "Ecole Supérieure de Microfinance (ESMi)",
            "imgSrc": "https://legrandfrere.bf/wp-content/uploads/esmi-150x150.jpg",
            "description": "Ecole supérieure dédiée à la microfinance et aux métiers associés.",
            "schoolType": "Ecole supérieure privée",
            "location": "Ouagadougou",
          
        },
        {
            "title": "Institut International de Formation à l'Expertise Comptable (2IFEC)",
            "imgSrc": "https://legrandfrere.bf/wp-content/uploads/2ifec-150x150.jpg",
            "description": "Institut spécialisé dans la formation à l'expertise comptable.",
            "schoolType": "Institut supérieur privé",
            "location": "Ouagadougou",
            
        }
    ];
    



}
