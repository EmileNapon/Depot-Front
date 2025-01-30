import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CertificationService } from '../certification/certification-service/certificationService';

import DOMPurify from 'dompurify';

@Component({
    selector: 'app-certification-contenu',
    templateUrl: './certification-contenu.component.html',
    styleUrls: ['./certification-contenu.component.css'],
    standalone: false
})
export class CertificationContenuComponent implements OnInit {

  Invalid: boolean = true;
  certificatId: string | null = null;

  // ListCertificatChapitre: any[]=[]
  filtredCertificatCours:any[]=[]

  ListCertificat:any[]=[]
  filtredCertificat:any[]=[]

  coursUseCertification: any[]=[]
  filtreCoursUseCertification: any[]=[]

  cours: any[] = [];
  ListCertificatChapitre:any[]=[]
  filtreListCertificatChapitre:any[]=[]
  
  certificatContenu:any[]=[]
  filtrecertificatContenu:any[]=[]


  currentIndex = 0;
  score = 0;
  passingScore = 5; // Score minimum requis pour valider
  totalQuestions = 0;
  missingQuestions: string[] = [];
  userAnswers: { [key: number]: string } = {};



  options: any[]=[]
  tri:any[]=[]



  isStatut:boolean=true
  isStatut2:boolean=false
  isStatut3:boolean=true
// declaration des variables de question-response

questions: any[] = [];
filtreQuestion:any[]=[]
reponses: { question: number; choix: number }[] = [];

 certificatId1: string | null = null;

  //-------------------------//
  // ListCertificatArticle:any[]=[]
  // ListCertificatPosdcast:any[]=[]
  // ListCertificatVideo:any[]=[]
  // filteredCertificatsArticle:any[]=[]
  // filteredCertificatsVideo:any[]=[]
  // filteredCertificatPosdcast:any[]=[]
  // ListArticle:any[]=[]
  // filtredCertificatArticle:any[]=[]
 
 certificatIdDom!: number

  //---------------------------------//

  constructor( private CertificatService:CertificationService, private router: Router, private route: ActivatedRoute){}
  
  ngOnInit(): void {
    this.certificatId = this.route.snapshot.paramMap.get('idCertification'); 
    this.getCertification()
    this.certificatIdDom = Number(this.route.snapshot.paramMap.get('idCertification'))
 
    // this.getCertificationChapitre()
    // this.getCertificationArticle()
    


   
    }

    

    getCertification():void{
      this.CertificatService.getCertificat().subscribe(data => {
        this.ListCertificat = data;
        this.filtredCertificat = this.ListCertificat.filter(certificat=> certificat.id==this.certificatId);
        console.log('1111111',this.filtredCertificat)
        this.getCours()
      });

    }
   

  getCours(){
    this.CertificatService.getCours().subscribe(data => {
      this.cours = data;
      console.log('7777777777',this.cours)
      this.getCoursUseCertification()
    });
   
  }
  getCoursUseCertification(){
    this.CertificatService.getCoursUseCertification().subscribe(data => {
      this.coursUseCertification = data;
      console.log('2222222222222',this.coursUseCertification)
      this.getCoursUseCertification1()
    });
   
  }

  filtreCoursUseCertification1:any[]=[]

  getCoursUseCertification1(){
    
    this.filtreCoursUseCertification1 = this.coursUseCertification.filter(coursUseCertification=> coursUseCertification.certification==this.certificatId);
    this.filtreCoursUseCertification = this.filtreCoursUseCertification1.filter(coursUseCertification=>this.cours.some(cours=> cours.id==coursUseCertification.cours));
    console.log('cccccccccccc11',this.filtreCoursUseCertification)
    this.getCertificationChapitre()
  }

    
    getCertificationChapitre(){
      this.CertificatService.getChapitre().subscribe(data => {
        this.ListCertificatChapitre = data;
        this.filtreListCertificatChapitre = this.ListCertificatChapitre.filter(chapitre=> this.filtreCoursUseCertification.some(filtreCoursUseCertification=>filtreCoursUseCertification.cours==chapitre.cours));
        console.log('bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb',this.certificatId)
        this.CertificatService.getContenu().subscribe(data => {
          this.certificatContenu = data;
          this.filtrecertificatContenu = this.certificatContenu.filter(contenu=> this.filtreListCertificatChapitre.some(filtreListCertificatChapitre=>filtreListCertificatChapitre.id==contenu.chapitre))
          //this.filtrecertificatContenu = this.certificatContenu.filter(contenu=>contenu.chapitre==this.certificatId)
          .map(contenu => {
            // Supprimer les balises <p> et </p> avant la sanitisation
            const descriptionSansP = contenu.description.replace(/<\/?p>/g, '');
            const sous_titreSansP = contenu.sous_titre.replace(/<\/?p>/g, '');
            return {
              ...contenu,sous_titre:DOMPurify.sanitize(sous_titreSansP),
              description: DOMPurify.sanitize(descriptionSansP)
            };
          });
          console.log('pppppppp',this.filtrecertificatContenu) 
          // Assurez-vous que les questions sont bien associées
          this.CertificatService.getQuestion().subscribe(data => {
            this.questions = data
            console.log('|||||||||||||||||||||||||||||||||||||', this.filtreListCertificatChapitre)  
            //this.filtreQuestion= this.questions.filter(question=>question.id==this.certificatId)
            this.filtreQuestion= this.questions.filter(question=>this.filtreListCertificatChapitre.some(chapitre=>chapitre.id==question.chapitre))
            this.tri=this.filtreQuestion;
            console.log('|||||||||||||||||||||||||||||||||||||', this.certificatId)  
            this.CertificatService.getOption().subscribe(data => {
              this.options = data
              console.log('|||||||||||||||||||||||||||||||||||||', this.filtreQuestion,'................')  

            });
  
          });

        

        });
      });
  
      
    }




onSelectCertificat(idCertificationEParcours1: number): void {
  this.router.navigate([`/parcours/${idCertificationEParcours1}`]); // Redirection vers la page des matières du domaine sélectionné
}


onSelectCertificatQuestion(idCertificationEParcours1:number){
  this.router.navigate([`/parcours-certificat/${idCertificationEParcours1}`]);
}

// //------------------------------------------------//
// isAffiche1:boolean=false
// isAffiche2:boolean=false
// isAffiche3:boolean=false
// isAffiche4:boolean=false

  // Gérer l'état du cours actuellement ouvert
  openCoursId: number | null = null;

  // Fonction pour ouvrir/fermer les chapitres d'un cours
  onSelectAfficherChapitre(chapitreId: number): void {
    if (this.openCoursId === chapitreId) {
      this.openCoursId = null; // Ferme les chapitres si déjà ouvert
    } else {
      this.openCoursId = chapitreId; // Ouvre les chapitres du cours sélectionné
    }
  }


// getCertificationArticle(){
//   this.CertificatService.getCertificatArticle().subscribe(data => {
//     this.ListCertificatArticle= data;
//     // this.filterMatieres()
//     this.getCertificationVideo()
//     this.getCertificationPosdcast()
//   });
// }

// getCertificationVideo(){
//   this.CertificatService.getCertificatVideo().subscribe(data => {
//     this.ListCertificatVideo= data;
//     // this.filterMatieres()
//   });
// }

// getCertificationPosdcast(){
//   this.CertificatService.getCertificatPodcast().subscribe(data => {
//     this.ListCertificatPosdcast= data;
//     // this.filterMatieres()
//   });
// }

// filterMatieres(): void {
//   if (this.certificatId) {
//   //  this.filtredCertificatChapitre = this.ListCertificatChapitre.filter(chapitre=> chapitre.idContenuCertificat===this.certificatId);
//     this.filteredCertificatsArticle = this.ListCertificatArticle.filter(article =>this.filtredCertificatChapitre.some(chapitre=> chapitre.id === article.idChapitre));
//     this.filteredCertificatsVideo = this.ListCertificatVideo.filter(video =>this.filtredCertificatChapitre.some(chapitre=> chapitre.id === video.idChapitre));
//     this.filteredCertificatPosdcast = this.ListCertificatPosdcast.filter(podcast =>this.filtredCertificatChapitre.some(chapitre=> chapitre.id === podcast.idChapitre));
//   }
// }

//----------------------------------------------------------//





}

