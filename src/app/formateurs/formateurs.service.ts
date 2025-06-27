import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormateursService {
  formateurs:any
  backendurl = 'http://localhost:8080/formateur'; // Adjust the base URL as needed

  constructor(private http:HttpClient) { }
  getAllFormateurs(): any {
    this.http.get(this.backendurl).subscribe(data => {
      console.log("Data from backend");
      this.formateurs = data;
    });
    return this.formateurs;
  }
}
