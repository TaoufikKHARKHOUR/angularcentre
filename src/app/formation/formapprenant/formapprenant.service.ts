import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FormapprenantService {
 backendUrl = 'http://localhost:8080/inscription'; // Adjust the base URL as needed
  constructor(private http: HttpClient) { }
  addInscription(inscription: any) {
    console.log("Inscription data:", inscription); // Log the data to be sent
    this.http.post(this.backendUrl, inscription).subscribe({
      next: (response) => {
        console.log("Inscription réussie :", response);
      },
      error: (error) => {
        console.error("Erreur lors de l'inscription :", error);
      },
      complete: () => {
        console.log("Requête terminée.");
      }
    });
  }
}
