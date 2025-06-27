import { FormateursService } from './formateurs.service';
import { NgFor, UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formateurs',
  standalone: true,
  imports: [NgFor,UpperCasePipe],
  templateUrl: './formateurs.component.html',
  styleUrl: './formateurs.component.css'
})
export class FormateursComponent implements OnInit {
 formateurs:any
  // Tu peux ajouter autant de formateurs que tu veux
constructor(private formateurservice:FormateursService) {}
ngOnInit(): void {
  this.formateurs = this.formateurservice.getAllFormateurs();
  console.log(this.formateurs);
}

}
