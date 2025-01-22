import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Quiz } from '../models/tousModel';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private apiUrl = 'http://localhost:8000/fidalli/quizzes'; // Remplacez par l'URL de l'API
  private baseUrl = 'http://127.0.0.1:8000/fidalli/quiz/'; // URL de l'API Djangoquiz/create
  private createUrl = 'http://127.0.0.1:8000/fidalli/quiz/create'; // URL de l'API Django
  private genereUrl = 'http://127.0.0.1:8000/fidalli/quiz/generate-quiz';
  private saveUrl = 'http://127.0.0.1:8000/fidalli/quiz/save-quiz';
  private submitRespUrl = 'http://127.0.0.1:8000/fidalli/quiz/submit';

 

  constructor(private http: HttpClient) {}

  // Récupérer tous les quizzes
  getQuizzes(): Observable<Quiz[]> {
    return this.http.get<Quiz[]>(this.apiUrl);
  }

  // Récupérer un quiz par ID
  getQuizById(id: number): Observable<Quiz> {
    return this.http.get<Quiz>(`${this.apiUrl}/${id}`);
  }

  // Créer un nouveau quiz
  createQuiz(quiz: any): Observable<any> {
    return this.http.post<any>(this.saveUrl, quiz);
  }

  // -- generer quiz ---------------
  // Créer un nouveau quiz
  genererQuiz(quiz: any): Observable<any> {
    return this.http.post<any>(this.genereUrl, quiz);
  }

  // Mettre à jour un quiz existant
  updateQuiz(id: number, quiz: Quiz): Observable<Quiz> {
    return this.http.put<Quiz>(`${this.apiUrl}/${id}`, quiz);
  }

  // Supprimer un quiz
  deleteQuiz(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

   /**
   * Récupérer le dernier quiz créé.
   * @returns Un observable contenant les détails du quiz.
   */
   getDetailQuiz(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  /**
   * Récupérer un quiz spécifique par son ID.
   * @param id ID du quiz.
   * @returns Un observable contenant les détails du quiz.
   */
  getQuizDetailById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}${id}/`);
  }
}
