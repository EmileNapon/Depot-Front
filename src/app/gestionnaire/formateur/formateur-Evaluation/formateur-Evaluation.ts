import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CustomUser, Module, QuizData } from '../models/tousModel';
import { ModuleService } from '../services/module.service';
import { ModuleFormationService } from '../services/moduleFormation.service';
import { QuizService } from '../services/quiz.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
// @ts-ignore
import { marked } from 'marked';


@Component({
    selector: 'app-dasbord-formateur',
    templateUrl: './dasbord-formateur.component.html',
    styleUrls: ['./dasbord-formateur.component.css'],
    standalone: false
})
export class FormateurEvaluationComponent implements OnInit {
  // Gestion des formulaires
  quizForm: FormGroup;
  // submissionForm: FormGroup;

  // État des sections du tableau de bord
  showExam = true;
  showExo = false;
  showlist = false;
  showButtonGenerer = true;
  isDisabled = true; // Définissez à true pour bloquer, ou à false pour autoriser

  // Données pour les modules
  modules: Module[] = [];
  formationId!: string;

// Quiz
  quiz: any; // Contiendra les détails du quiz
  error: string | null = null;
  quizId! : any;
  // quizData : any;
  generated_text!: any;
  formattedText!: SafeHtml;
  // rawHtml!: string;

  // Variables liées aux examens
  totalQuestions = 0;
  generatedQuestions: string[] = [];
  showGeneratedQuestions = false;

 

  constructor(
    private fb: FormBuilder,
    private moduleService: ModuleService,
    private moduleFormationService: ModuleFormationService,
    private quizService: QuizService,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) {
    this.quizForm = this.fb.group({
      besoin: ['', Validators.required],
      title: ['', Validators.required],
      date: ['', Validators.required],
      start_time: ['', Validators.required],
      duration_minutes: ['', [Validators.required, Validators.min(1)]],
      module_id: ['', Validators.required],

      description: [''],
      qcm: [false],
      qcmCount: [0],
      uniqueQuestion: [false],
      uniqueCount: [0],
      vraiFaux: [false],
      vraiFauxCount: [0],
      difficultyLevel: ['', Validators.required], // Nouveau champ
    });
  

    // Contrôle des dépendances entre `title` et `file`
    this.setupOptionControls();

  
    // Observer les changements pour mettre à jour le champ Besoin
    this.quizForm.valueChanges.subscribe(() => {
      this.calculateTotalQuestions();
      this.updateBesoinField();
    });

    
  }

  ngOnInit(): void {
    this.formationId = this.route.snapshot.params['DasbordFormationId'];
    this.loadModules();
    if( this.quizId != null){
      this.loadQuiz();
    }

    this.generated_text = `Pas de Texte !`;
    
  }

  // Contrôler les champs activés en fonction de la sélection (description ou fichier)
  setupOptionControls(): void {
    this.quizForm.get('descriptionOrFile')?.valueChanges.subscribe((value) => {
      const titleControl = this.quizForm.get('descriptQuiz');
      const fileControl = this.quizForm.get('file');

      if (value === 'description') {
        titleControl?.enable();
        fileControl?.disable();
        fileControl?.setValue(null);
      } else if (value === 'file') {
        fileControl?.enable();
        titleControl?.disable();
        titleControl?.setValue('');
      }
    });
  }

  // Calculer le nombre total de questions
  calculateTotalQuestions(): void {
    const values = this.quizForm.value;
    this.totalQuestions =
      (values.qcm ? values.qcmCount : 0) +
      (values.uniqueQuestion ? values.uniqueCount : 0) +
      (values.vraiFaux ? values.vraiFauxCount : 0);
  }

  // Générer le texte du champ Besoin
  updateBesoinField(): void {
    const values = this.quizForm.value;

    // Trouver le nom du module basé sur l'ID
    const selectedModule = this.modules.find(module => module.id.toString() === values.module_id);
    const nom_module = selectedModule ? selectedModule.nom_module : 'Sujet non spécifié';

    // Création du résumé dynamique
    const besoinText = `
      Créer un quiz sur le thème '${nom_module}' ${values.difficultyLevel? `, destiné à un niveau ${values.difficultyLevel}.` : ''}
      ${values.qcm || values.uniqueQuestion || values.vraiFaux ? `Le quiz comprendra au total ${this.totalQuestions} question(s), répartie(s) comme suit :`: ''} ${values.qcm ? `${values.qcmCount} question(s) à choix multiples (QCM), avec possibilité d'avoir au moins deux réponses correctes;` : ''} ${values.uniqueQuestion ? `${values.uniqueCount} question(s) à réponse unique, où une seule réponse correcte est attendue;`: ''} ${values.vraiFaux ? `${values.vraiFauxCount} question(s) de type Vrai/Faux, avec les réponses possibles étant uniquement "Vrai" ou "Faux";`: ''}
      
      ${values.description? `Quelques détails du sujet: ${values.description}.`: ''}
      Le quiz devra inclure une explication pour chaque question, avec des options pertinentes et des réponses conformes à une bonne pratique au sujet concerné.
    `.trim();
    // Mise à jour du champ Besoin
    this.quizForm.get('besoin')?.patchValue(besoinText, { emitEvent: false });
  }

  // Générer les questions d'examen
  generateQuestions(): void {
    this.gererQuiz();
    const total = this.totalQuestions;
    // this.generatedQuestions = Array.from(
    //   { length: total },
    //   (_, i) => `Question ${i + 1}: Exemple de question`
    // );
    // console.log('Submission form submitted:', this.quizForm.value);
    this.showGeneratedQuestions = true;
    this.showButtonGenerer = false;
    
  }

  // Régénérer les questions d'examen
  regenerateQuestions(): void {
    this.generateQuestions();
    this.createQuiz();
    // this.loadQuiz();
  }

  // Abandonner
  abandonQuestions(): void {
    this.quizForm.reset();
    this.showGeneratedQuestions = false;
    this.showButtonGenerer = true;
  }

  submitForm() {
    if (this.quizForm.valid) {
      console.log('Submission form submitted:', this.quizForm.value);
    } else {
      console.log('Submission form is invalid.');
    }
  }

  // Soumettre le quiz
  submitQuiz(): void {
    console.log('Quiz soumis avec les questions:', this.generatedQuestions);
    alert('Les questions ont été soumises avec succès.');
    this.showGeneratedQuestions = false;
    this.showButtonGenerer = true;
    this.quizForm.reset();
  }

 

  // Charger les modules liés au formateur
  loadModules(): void {
    this.moduleService.getModules().subscribe(
      (data) => {
        this.modules = data;
        console.log("!!!!!!!!!!!!!!!!!!!!!!!",this.modules )
      },
      (error) => {
        console.error('Erreur lors du chargement des modules:', error);
      }
    );
  }

  loadQuiz(): void {
    // Exemple : Récupérer le dernier quiz lors du chargement du composant
    this.quizService.getQuizDetailById(this.quizId).subscribe(
      (data) => {
        this.quiz = data;
      },
      (err) => {
        this.error = 'Erreur lors de la récupération des données';
        console.error(err);
      }
    );
  }


// -------- Generer des quiz -----------------
gererQuiz(): void {
  const values = this.quizForm.value;
  const val : any= {
    description: values.besoin,
  }
  this.quizService.genererQuiz(val).subscribe(response => {
    this.generated_text = response.generated_text;
    console.log('Texte généré:', response.generated_text);
    
    // Convert Markdown en HTML sécurisé
    const rawHtml = marked(this.generated_text);
    this.formattedText = this.sanitizer.bypassSecurityTrustHtml(rawHtml.toString());
    
    this.showGeneratedQuestions = true;
    this.showButtonGenerer = false;
  });
}

// -------Creation de Quiz --------------

createQuiz(): void {
  const values = this.quizForm.value;
  const quizData: QuizData = {
    description: this.generated_text,
    title: values.title,
    date: values.date,
    start_time: values.start_time,
    duration_minutes: values.duration_minutes,
    module_id: values.module_id
  };
  console.log(quizData);
  this.quizService.createQuiz(quizData).subscribe(
    (response) => {
      this.quizId = response.quiz_id;
      console.log('ID du quiz créé :', this.quizId);
      this.loadQuiz();

      
      this.showGeneratedQuestions = false;
      this.showButtonGenerer = true;
      this.showlist = true;
      this.quizForm.reset();
      alert('Les questions ont été soumises avec succès.');
      
      // Vous pouvez stocker l'ID ou effectuer une autre action ici
    },
    (error) => {
      console.error('Erreur lors de la création du quiz :', error);
    }
  );
}



  // Gestion de la navigation entre sections
  navigateTo(section: string): void {
    this.showExam = section === 'exam';
    this.showExo = section === 'exo';
  }

  // Affichage de liste des examens et Exercices
  onShowList(): void {
    this.showlist = true;
  }

  onShutList(): void {
    this.showlist = false;
  }
  
}

