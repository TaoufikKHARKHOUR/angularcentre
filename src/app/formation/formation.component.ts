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
import { FormationdetailsdialogComponent } from './formationdetailsdialog/formationdetailsdialog.component';
@Component({
  selector: 'app-formation',
  standalone: true,
  imports: [FontAwesomeModule,NgFor,RouterModule,DialogModule],
  templateUrl: './formation.component.html',
  styleUrl: './formation.component.css'
})
export class FormationComponent implements OnInit{
  formations:any;
  currentformation:any;
  nomcompletformateur:string = '';
 protected openDialog(formation :any) {
     this.dialog.open(FormapprenantComponent, {
      width: '400px',
      disableClose: false, // revent closing the modal by clicking outside automatically
      data: { formation: formation }
    
    });
    console.log(formation);
    this.currentformation=formation;
  }
  protected openDialogdetails(formation: any) {
    this.dialog.open(FormationdetailsdialogComponent, {
      width: '400px',
      disableClose: false,
      data: { formation: formation } });
     // prevent closing the modal by clicking outside automatically)
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
this.formations=this.shuffleArray(this.formationservice.getAllformations());
console.log(this.formations)
 }
 getnomformateur(formation : any):string {

  
    const id = formation.formateur_id;
    return this.formationservice.getnomformateur(id);
  
 }
 shuffleArray(array: any[]): any[] {
  for (let i = array.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1)); // Génère un index aléatoire
    [array[i], array[randomIndex]] = [array[randomIndex], array[i]]; // Échange les éléments
  }
  return array;
}


}
