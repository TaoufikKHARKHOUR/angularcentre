import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SuppressionService {
      backendUrl = 'http://localhost:8080/formation';
  constructor(private http:HttpClient) { }
  deleteFormation(id: number) {
    const url = `${this.backendUrl}/${id}`;
    this.http.delete(url).subscribe({
      next: (response) => {
      // handle success
      console.log('Formation supprimée avec succès', response);
      },
      error: (error) => {
      // handle error
      console.error('Erreur lors de la suppression', error);
      }
    });
}
}
