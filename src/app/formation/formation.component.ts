import { Component, OnInit,inject } from '@angular/core';
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
import { FormapprenantComponent } from './formapprenant/formapprenant.component';
import { Dialog, DialogModule } from '@angular/cdk/dialog';
@Component({
  selector: 'app-formation',
  standalone: true,
  imports: [FontAwesomeModule,NgFor,RouterModule,DialogModule],
  templateUrl: './formation.component.html',
  styleUrl: './formation.component.css'
})
export class FormationComponent implements OnInit{
  formations:any;
 //private dialog = inject(Dialog);
 protected openDialog() {
  console.log('Dialog opened');
    this.dialog.open(FormapprenantComponent, {
      width: '400px', // Set the width of the modal
      disableClose: true // Prevent closing the modal by clicking outside
    });
  }
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
 constructor(private formationservice:FormationService,private dialog:Dialog){}
 ngOnInit(){
this.formations=this.formationservice.getAllformations()
 }


}
