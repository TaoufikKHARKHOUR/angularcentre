import { HttpClient, HttpClientModule, provideHttpClient } from '@angular/common/http';
import { Component, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
  
})
export class FormationService {
  formations:any
  backendUrl = 'http://localhost:8080/formation'; // Adjust the base URL as needed
  //imageurl = http://localhost:8080/formation/{nomFormation}/photo
  backendurlformateur = 'http://localhost:8080/formateur'; // Adjust the base URL as needed
  
  constructor(private http:HttpClient) {  }
  getAllformations():any{
      
    this.http.get(this.backendUrl).subscribe(data=>{
      console.log("data from backend")
      //console.log(data)
      this.formations=data
     // console.log(this.formations)
    })
    return this.formations
  }
  getnomformateur(id: number): string {
    let nomFormateur = '';
    let prenomformateur = '';
    this.http.get(`${this.backendurlformateur}/${id}`).subscribe((data: any) => {
      console.log("data from backend formateur")
      console.log(data)
      nomFormateur = data.nom;
      prenomformateur = data.prenom;
    }, error => {
      console.error('Error fetching formateur:', error);
    });
    return nomFormateur+ ' ' + prenomformateur;
  }
}