import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-qiz-certification',
  templateUrl: './qiz-certification.component.html',
  styleUrls: ['./qiz-certification.component.css']
})
export class QizCertificationComponent implements OnInit {

  idPage: number = 1;
  content: any;

  // Contenus des pages
  pagesContent: { [key: number]: { title: string, videoSrc: string, article: string, question: string, options: string[], correctAnswer: string } } = {
    1: {
      title: 'Page 1',
      videoSrc: 'assets/video1.mp4',
      article: 'Ceci est un article sur Angular pour la page 1.',
      question: 'Quel est le langage de programmation utilisé pour Angular?',
      options: ['JavaScript', 'Python', 'Java', 'C#'],
      correctAnswer: 'JavaScript'
    },
    2: {
      title: 'Page 2',
      videoSrc: 'assets/video1.mp4',
      article: 'Ceci est un article sur Angular pour la page 1.',
      question: 'Quel est le langage de programmation utilisé pour Angular?',
      options: ['JavaScript', 'Python', 'Java', 'C#'],
      correctAnswer: 'JavaScript'
    },
    3: {
      title: 'Page 3',
      videoSrc: 'assets/video1.mp4',
      article: 'Ceci est un article sur Angular pour la page 1.',
      question: 'Quel est le langage de programmation utilisé pour Angular?',
      options: ['JavaScript', 'Python', 'Java', 'C#'],
      correctAnswer: 'JavaScript'
    },
    4: {
      title: 'Page 4',
      videoSrc: 'assets/video2.mp4',
      article: 'Ceci est un article sur Angular pour la page 2.',
      question: 'Quel est le framework CSS le plus utilisé avec Angular?',
      options: ['Bootstrap', 'Tailwind', 'Foundation', 'Bulma'],
      correctAnswer: 'Bootstrap'
    },
    5: {
      title: 'Page 5',
      videoSrc: 'assets/video2.mp4',
      article: 'Ceci est un article sur Angular pour la page 2.',
      question: 'Quel est le framework CSS le plus utilisé avec Angular?',
      options: ['Bootstrap', 'Tailwind', 'Foundation', 'Bulma'],
      correctAnswer: 'Bootstrap'
    },
    6: {
      title: 'Page 6',
      videoSrc: 'assets/video2.mp4',
      article: 'Ceci est un article sur Angular pour la page 2.',
      question: 'Quel est le framework CSS le plus utilisé avec Angular?',
      options: ['Bootstrap', 'Tailwind', 'Foundation', 'Bulma'],
      correctAnswer: 'Bootstrap'
    },
    10: {
      title: 'Page 7',
      videoSrc: 'assets/video10.mp4',
      article: 'Ceci est un article sur Angular pour la page 10.',
      question: 'Quel est l’outil de développement utilisé pour Angular?',
      options: ['Angular CLI', 'npm', 'yarn', 'webpack'],
      correctAnswer: 'Angular CLI'
    }
  };

  selectedOption: string | null = null;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    // Récupérer l'idPage à partir des paramètres de route
    this.route.params.subscribe(params => {
      this.idPage = +params['idPage']; // Convertir en nombre
      this.content = this.pagesContent[this.idPage];
    });
  }

  submitAnswer(): void {
    if (this.selectedOption === this.content.correctAnswer) {    
      // Incrémenter l'idPage et rediriger vers la page suivante
      const nextPage = this.idPage + 1;
      
      if (this.pagesContent[nextPage]) { // Si la page suivante existe
        this.router.navigate([`/page/${nextPage}/pageContenu`]);
      } 
  }}







  

}


