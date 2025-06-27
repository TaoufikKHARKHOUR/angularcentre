import { AuthentificationService } from './../authentification/authentification.service';
import { ChangeDetectorRef, Component,OnInit } from '@angular/core';
import { ProposService } from './propos.service';
import { NgFor, NgIf } from '@angular/common';
import { FormationService } from '../formation/formation.service';
import { Router, RouterModule } from '@angular/router';
import { DialogModule } from '@angular/cdk/dialog';
import { ModifierComponent } from './modifier/modifier.component';
import { Dialog } from '@angular/cdk/dialog';
import { SupprimerComponent } from './supprimer/supprimer.component';

@Component({
  selector: 'app-propos',
  standalone: true,
  imports: [NgIf,NgFor,RouterModule,DialogModule],
  templateUrl: './propos.component.html',
  styleUrl: './propos.component.css'
})
export class ProposComponent implements OnInit {

  message: string = ''; 
  message2: string = '';
  constructor(private cd: ChangeDetectorRef,private router:Router,private proposService: ProposService,private authentificationService:AuthentificationService,private formationservice:FormationService,private dialog:Dialog) {}
  formateur:any;
  formations:any[] = [];
  formationdeformateur:any[] = [];
  

  opendialogmodifier(formation: any) {
    // Logic to open a dialog for modifying the formation
    console.log('Open dialog for modification:', formation);
    this.dialog.open(ModifierComponent, {
      width: '600px',
      disableClose: false,
      data: { formation: formation }
    });
  }
  opendialogsupprimer(formation: any) {
    // Logic to open a dialog for confirming deletion of the formation
    console.log('Open dialog for deletion:', formation);
    this.dialog.open(SupprimerComponent, {
      width: '600px',
      disableClose: false,
      data: { formation: formation }
    });
  }
  listeapprenant(formation: any) {
   
    console.log('Navigate to learners list for formation:', formation);
    this.router.navigate(['/apprenants'], { queryParams: { formation: JSON.stringify(formation) } });
  }
  ngOnInit() {
    this.formateur = this.authentificationService.getFormateur();
    if (!this.formateur) {
      console.error('Formateur not found in service');
      return;
    }
    this.formations=this.formationservice.getAllformations()
     console.log(this.formations)
     this.formationdeformateur = this.formations.filter((formation: any) => formation.formateur.id === this.formateur.id);
     console.log('Formations for the formateur:', this.formationdeformateur);
  }
  onSubmit(event: Event) {
    event.preventDefault();
    this.message = '';
    this.message2 = '';
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    // Convert FormData to a plain object
    const formation: any = {};
    formData.forEach((value, key) => {
      formation[key] = value;
    });
    formation.formateur_id = this.formateur.id; // Assuming formateur.id is the ID of the formateur

    console.log('Formation object:', formation);
    this.proposService.addformation(formation).subscribe({
      next: () => {
      this.message = 'La formation a été enregistrée avec succès !';
      form.reset(); // Reset the form after successful submission
      this.cd.detectChanges(); // Trigger change detection to update the view

      // Utilisez setTimeout ici si vous voulez effacer le message après un délai
      setTimeout(() => {
        this.message = '';
        this.cd.detectChanges();
      }, 3000); // 3 secondes par exemple
      },
      error: (err) => {
      this.message2 = 'Erreur : la formation n\'a pas pu être enregistrée. Veuillez ne pas dépasser 255 caractères.';
      console.error('errrrrrrrr', err);
      this.cd.detectChanges(); // Trigger change detection to update the view

      // Utilisez setTimeout ici pour effacer le message d'erreur après un délai
      setTimeout(() => {
        this.message2 = '';
        this.cd.detectChanges();
      }, 3000);
      }
    });
  }
  navigue() {
    this.router.navigate(['/authentification']);
  }
}