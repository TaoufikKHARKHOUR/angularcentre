import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { 
  faHtml5, 
  faCss3Alt, 
  faJsSquare, 
  faAngular, 
  faReact, 
  faNodeJs,faJava,faFlutter
} from '@fortawesome/free-brands-svg-icons';
import { siSpring,siSpringboot} from 'simple-icons/icons';
import { NgFor } from '@angular/common';
import { FormationService } from './formation.service';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-formation',
  standalone: true,
  imports: [FontAwesomeModule,NgFor,RouterModule],
  templateUrl: './formation.component.html',
  styleUrl: './formation.component.css'
})
export class FormationComponent implements OnInit{
  formations:any
iccon =faHtml5;
icss=faCss3Alt;
jss=faJsSquare;
angular=faAngular;
react=faReact;
nodejs=faNodeJs;
java=faJava;
springlogo=siSpring.svg;
boot=siSpringboot.svg;
flutter=faFlutter;
 constructor(private formationservice:FormationService){}
 ngOnInit(){
  this.formations=this.formationservice.getAllformations()
 }
}