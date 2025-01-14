import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interface-inscription/interface-inscription';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://127.0.0.1:8000/fidalli/register/';
  private apiUrl1 = 'http://localhost:8000/fidalli/domaines/create/';

  constructor(private http: HttpClient) {}

  registerUser(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, user);
  }

  add(domaine: any): Observable<any> {
    return this.http.post<any>(this.apiUrl1, domaine);
  }


}
