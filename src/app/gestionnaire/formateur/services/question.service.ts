import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Question } from '../models/tousModel';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  private apiUrl = 'http://localhost:8000/api/questions'; // Remplacez par l'URL de l'API

  constructor(private http: HttpClient) {}

  // Récupérer toutes les questions
  getQuestions(): Observable<Question[]> {
    return this.http.get<Question[]>(this.apiUrl);
  }

  // Récupérer une question par ID
  getQuestionById(id: number): Observable<Question> {
    return this.http.get<Question>(`${this.apiUrl}/${id}`);
  }

  // Créer une nouvelle question
  createQuestion(question: Question): Observable<Question> {
    return this.http.post<Question>(this.apiUrl, question);
  }

  // Mettre à jour une question existante
  updateQuestion(id: number, question: Question): Observable<Question> {
    return this.http.put<Question>(`${this.apiUrl}/${id}`, question);
  }

  // Supprimer une question
  deleteQuestion(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
