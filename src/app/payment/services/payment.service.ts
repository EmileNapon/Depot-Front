import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private apiUrl = 'http://localhost:3000/fapi';  // L'URL de l'API

  constructor(private http: HttpClient) { }

  // Obtenir toutes les transactions
  getTransactions(): Observable<any> {
    return this.http.get(`${this.apiUrl}/transactions`);
  }

  // Obtenir une transaction par son ID
  getTransactionById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/transactions/${id}`);
  }

  // Créer une nouvelle transaction
  createTransaction(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/transactions`, data);
  }

  // Mettre à jour une transaction existante
  updateTransaction(id: string, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/transactions/${id}`, data);
  }

  // Supprimer une transaction
  deleteTransaction(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/transactions/${id}`);
  }

  // Mettre à jour le statut d'une transaction
  updateTransactionStatus(id: string, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/transactions/${id}/status`, data);
  }

  // Obtenir toutes les abonnements
  getSubscriptions(): Observable<any> {
    return this.http.get(`${this.apiUrl}/subscriptions`);
  }

  // Obtenir un abonnement par son ID
  getSubscriptionById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/subscriptions/${id}`);
  }

  // Créer un nouvel abonnement
  createSubscription(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/subscriptions`, data);
  }

  // Mettre à jour un abonnement existant
  updateSubscription(id: string, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/subscriptions/${id}`, data);
  }

  // Supprimer un abonnement
  deleteSubscription(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/subscriptions/${id}`);
  }

  // Obtenir toutes les factures
  getInvoices(): Observable<any> {
    return this.http.get(`${this.apiUrl}/invoices`);
  }

  // Obtenir une facture par son ID
  getInvoiceById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/invoices/${id}`);
  }

  // Créer une nouvelle facture
  createInvoice(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/invoices`, data);
  }

  // Mettre à jour une facture existante
  updateInvoice(id: string, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/invoices/${id}`, data);
  }

  // Supprimer une facture
  deleteInvoice(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/invoices/${id}`);
  }
}
