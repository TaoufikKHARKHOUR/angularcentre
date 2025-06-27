import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AccueilService {

  formateurs:any
    backendurl = 'http://localhost:8080/formateur'; // Adjust the base URL as needed
    backendurlfoto= 'http://localhost:8080/formateur/photo'; // Adjust the base URL for photo uploads
    deleteFormateur(id: any): Observable<any> {
      const url = `${this.backendurl}/${id}`;
      return this.http.delete(url);
    }
  
    constructor(private http:HttpClient) { }
    getAllFormateurs(): any {
      this.http.get(this.backendurl).subscribe(data => {
        console.log("Data from backend");
        this.formateurs = data;
      });
      return this.formateurs;
    }
    ajouterFormateur(formateur: any): Observable<any> {
      const formData = new FormData();
      formData.append('nom', formateur.nom);
      formData.append('prenom', formateur.prenom);
      formData.append('email', formateur.email);
      formData.append('file', formateur.photo);
      formData.append('telephone', formateur.telephone);
      formData.append('motdepasse', formateur.motDePasse);
      formData.append('specialite', formateur.specialite);
      formData.append('datedenaissance', formateur.dateNaissance);
      formData.append('coutTotal', formateur.coutTotal); // Default value if not provided

      console.log('Formateur ajouté:', formateur);
      return this.http.post(this.backendurlfoto, formData);
    }

}
