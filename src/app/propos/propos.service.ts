import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProposService {
  formations:any
  backendUrl = 'http://localhost:8080/formation';
  constructor(private http:HttpClient) { }
  addformation(formation:any){
    this.http.post(this.backendUrl,formation).subscribe(data=>{
      console.log("data from backend")
      console.log(data)
      this.formations=data
    })
  }
}
