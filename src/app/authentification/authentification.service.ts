import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
   //administrateur: any;
   backendUrl = 'http://localhost:8080/administrateur'; // Adjust the base URL as needed
  constructor(private http:HttpClient) { }
  getAdministrateur(): Observable<any[]> {
    return this.http.get<any[]>(this.backendUrl); // Retourne un Observable contenant la liste des administrateurs
  }
  formateurs:any
  formateur:any;
  setFormateur(data: any): void {
    this.formateur = data;
  }
  getFormateur(): any {
    return this.formateur;
  }
  backendurl1 = 'http://localhost:8080/formateur'; // Adjust the base URL as needed

  getAllFormateurs(): Observable<any[]>  {
    
    return this.http.get<any[]>(this.backendurl1); // Retourne un Observable contenant la liste des formateurs
  }
  
}
