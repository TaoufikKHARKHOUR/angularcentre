import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProposService {
  backendUrl = 'http://localhost:8080/formation';

  constructor(private http: HttpClient) {}

  addformation(formation: FormData) {
    return this.http.post(this.backendUrl, formation);
  }
}
