import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApprenantsService {
  apprenantsservice:any;
  inscriptions:any;
  backebndUrl = 'http://localhost:8080/apprenant';
  backendurl = 'http://localhost:8080/inscription'; // Adjust the base URL as needed
  constructor(private http:HttpClient) { }
  getAllApprenants():any {
    this.http.get(this.backebndUrl).subscribe(data => {
      console.log("data from backend apprenants");
      //console.log(data);
      this.apprenantsservice = data;
      console.log(this.apprenantsservice);
      //console.log(this.apprenantsservice);
    })
    return this.apprenantsservice;
  } 
  getAllInscription(): any {
  this.http.get<any[]>(this.backendurl).subscribe((data: any[]) => {
    console.log("data from backend inscription");

    // On garde toute la structure d'origine sans transformation
    this.inscriptions = data;

    console.log(this.inscriptions);
  });

  return this.inscriptions;
}

}

