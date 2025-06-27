import { Component,Inject } from '@angular/core';
import { DialogRef,DIALOG_DATA } from '@angular/cdk/dialog';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { FormapprenantService } from './formapprenant.service';
import { ReactiveFormsModule } from '@angular/forms';

//import { Router,RouterModule } from '@angular/router';
@Component({
  selector: 'app-formapprenant',
  standalone: true,
  imports: [ReactiveFormsModule],
    templateUrl: './formapprenant.component.html',
  styleUrl: './formapprenant.component.css'
})
export class FormapprenantComponent {
  constructor(private fb: FormBuilder,private dialogRef: DialogRef<FormapprenantComponent>,@Inject(DIALOG_DATA) public data: { formation: any },private formapprenantService: FormapprenantService) {
    if (!data || !data.formation) {
      console.error('No formation data provided!');
    }
    this.inscriptionForm = this.fb.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telephone: ['', Validators.required],
      //motdepasse: ['', Validators.required],
      datedenaissance: ['', Validators.required]
    });
  }
  inscriptionForm: FormGroup;
  
  closeDialog() {
    this.dialogRef.close();
  }
  fermerFormulaire() {
    this.dialogRef.close();
    //this.router.navigate(['/formation']);
  }
  onSubmit(event: Event) {
    event.preventDefault();
    if (this.inscriptionForm.valid) {
      const formData = this.inscriptionForm.value;
      console.log('formData',formData);
      const apprenantAvecMotdepasse = {
      ...formData,
      motdepasse: 'apprenant123'
    };
    console.log('apprennatmotdepasse',apprenantAvecMotdepasse);
      // Ajouter les données de la formation
      const inscription: any = {
        apprenant:apprenantAvecMotdepasse,
        formation: this.data.formation, // Inclure la formation
        paye: false, // Par défaut, l'inscription n'est pas payée
        dateInscription: new Date().toISOString() // Date d'inscription actuelle
      };
      console.log(inscription);

      // Envoyer les données via le service
      this.formapprenantService.addInscription(inscription);
    }
  }

}
