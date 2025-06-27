import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import{ catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProposService {
  backendUrl = 'http://localhost:8080/formation';

  constructor(private http: HttpClient) {}

  addformation(formation: any) {
    console.log('Adding formation:', formation);
    const formData = new FormData();
    formData.append('durre', formation.durre);
    formData.append('nomFormation', formation.nomFormation);
    formData.append('description', formation.description);
    formData.append('domaine', formation.domaine);
    formData.append('objectif', formation.objectif);
    formData.append('prerequis', formation.prerequis);
    formData.append('session', formation.session);
    formData.append('niveau', formation.niveau);
    formData.append('datededebut', formation.datededebut);
    formData.append('datedefin', formation.datedefin);
    formData.append('photo', formation.photo); // formation.photo should be a File object
    formData.append('formateur_id', String(formation.formateur_id)); // Ensure formateur_id is sent as a string
    // formateur_id is not retrieved from the form fields, but from the authenticated formateur object.
    // Make sure to set formation.formateur_id = this.formateur.id before calling addformation.
    return this.http.post(this.backendUrl, formData).pipe(
      catchError(error => {
        console.error('Error occurred:', error);
        return throwError(() => new Error('Failed to add formation'));
      })
    );
  }
}
