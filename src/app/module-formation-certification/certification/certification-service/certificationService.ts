import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
  })
 
 

export class CertificationService {

  ListCertificat:any[]=[]
  //private ContenuCertificatUrl = 'http://localhost:9999/ContenuCertificat';
  private ContenuCertificatUrl = 'http://127.0.0.1:8000/fidalli/certifications';
  private CoursUseCertification = 'http://127.0.0.1:8000/fidalli/CoursUseCertification/'
  private coursUrl= "http://localhost:8000/fidalli/cours/list_cours";

  private ChapitreUrl = 'http://localhost:9999/Chapitre';
  private ArticleUrl = 'http://localhost:9999/Article';
  private VideoUrl = 'http://localhost:9999/Video';
  private PodcastUrl = 'http://localhost:9999/Podcast';
  
constructor( private http: HttpClient ) { }

getCertificat(): Observable<any[]> {
  return this.http.get<any[]>(this.ContenuCertificatUrl);
}

getCoursUseCertification() : Observable<any[]>{
  return this.http.get<any[]>(this.CoursUseCertification); 
}


getCertificatChapitre() : Observable<any[]>{
  return this.http.get<any[]>(this.ChapitreUrl); 
}

getCertificatArticle() : Observable<any[]>{
  return this.http.get<any[]>(this.ArticleUrl); 
}

getCertificatVideo() : Observable<any[]>{
  return this.http.get<any[]>(this.VideoUrl); 
}

getCertificatPodcast() : Observable<any[]>{
  return this.http.get<any[]>(this.PodcastUrl); 
}




/////////////////////////////////////////////////////////////


getCours(): Observable<any[]> {
  return this.http.get<any[]>(this.coursUrl);
}

private chapitreUrl= "http://127.0.0.1:8000/fidalli/chapitre/list_chapitres";



getChapitre(): Observable<any[]> {
  return this.http.get<any[]>(this.chapitreUrl);
}

private sectionUrl= "http://127.0.0.1:8000/fidalli/section/list_sections";

getSection(): Observable<any[]> {
  return this.http.get<any[]>(this.sectionUrl);

}

private contenuUrl= "http://127.0.0.1:8000/fidalli/contenus/list_contenus";

getContenu(): Observable<any[]> {
return this.http.get<any[]>(this.contenuUrl);

}



private baseUrlQuestios = 'http://127.0.0.1:8000/fidalli';

getQuestion(): Observable<any[]> {
  return this.http.get<any[]>(`${this.baseUrlQuestios}/questions/`);
}

getOption(): Observable<any[]> {
  return this.http.get<any[]>(`${this.baseUrlQuestios}/options/`);
}

 


submitReponses(reponses: any[]): Observable <any>{
  return this.http.post(`${this.baseUrlQuestios}/reponses/`, reponses);
}

postReponses(utilisateurId: number, chapitreId: number, reponses: any[]): Observable<any> {
  const url = `${this.baseUrlQuestios}/reponses/`;
  const payload = {
    user: utilisateurId,
    chapitre: chapitreId,
    reponses: reponses
  };
  return this.http.post(url, payload);
}

}