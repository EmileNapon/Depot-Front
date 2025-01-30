import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-quiz',
    templateUrl: './quiz-contenu-libre.component.html',
    styleUrls: ['./quiz-contenu-libre.component.css'],
    standalone: false
})
export class QizContenuLibreComponent {
  
  quizForm!: FormGroup;

  constructor(private fb: FormBuilder) {

  }
ngOnInit(): void {
  this.quizForm = this.fb.group({
    question1: ['', Validators.required],
    question2: ['', Validators.required],
    question3: ['', Validators.required],
  });
  
}
  onSubmit() {
    if (this.quizForm.valid) {
      const quizResults = this.quizForm.value;
      console.log('Quiz Submitted:', quizResults);
      // Vous pouvez traiter les réponses ici, par exemple les envoyer à un backend ou afficher les résultats
    } else {
      console.log('Quiz form is invalid');
    }
  }
}


