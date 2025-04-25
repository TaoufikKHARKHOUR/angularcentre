import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
  
})
export class FormationService {
  formations:any
  backendUrl = 'http://localhost:8080/formation'; // Adjust the base URL as needed

  constructor(private http:HttpClient) {  }
  getAllformations():any{
      
    this.http.get(this.backendUrl).subscribe(data=>{
      console.log("data from backend")
      console.log(data)
      this.formations=data
    })
    return this.formations
  } 
}
