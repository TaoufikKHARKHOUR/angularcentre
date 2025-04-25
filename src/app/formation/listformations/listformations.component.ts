import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormationService } from '../formation.service';
@Component({
  selector: 'app-listformations',
  standalone: true,
  imports: [NgFor],
  templateUrl: './listformations.component.html',
  styleUrl: './listformations.component.css'
})
export class ListformationsComponent {
  formations:any
  constructor(private formationservice:FormationService){}
  ngOnInit(){
    this.formations=this.formationservice.getAllformations()
  }
    

}
