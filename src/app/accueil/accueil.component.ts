import { SupprimerformateurComponent } from './supprimerformateur/supprimerformateur.component';
import { ChangeDetectorRef, Component,OnInit } from '@angular/core';
import { AccueilService } from './accueil.service';
import { NgFor, NgIf} from '@angular/common';
import { MatDialog } from '@angular/material/dialog'; // Import MatDialog
import { ModifierformateurComponent } from './modifierformateur/modifierformateur.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [NgFor,NgIf],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.css'
})
export class AccueilComponent implements OnInit {
  message1: string = '';
  message2: string = '';
  formateurs:any
    // Tu peux ajouter autant de formateurs que tu veux
  constructor(private cd:ChangeDetectorRef,private router:Router,private accueilservice:AccueilService,private dialog: MatDialog) {}
  ngOnInit(): void {
    this.formateurs = this.accueilservice.getAllFormateurs();
    console.log(this.formateurs);
  }
  deleteFormateur(formateur: any) {
    this.accueilservice.deleteFormateur(formateur);
  }
  //dialogRef.afterClosed().subscribe(result => { if (result) {this.deleteFormateur(formateur);} });
  deeleteFormateur(formateur:any){
    // Ouvre une boîte de dialogue de confirmation avant de supprimer le formateur
    this.dialog.open(SupprimerformateurComponent, {
      width: '400px',
      data: { formateur: formateur },
      disableClose: false // Empêche la fermeture du dialogue en cliquant en dehors
    });
  }
  onSubmit(event: Event){
    event.preventDefault(); // Empêche le rechargement de la page
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    console.log('Formulaire soumis:', formData);  
    console.log('Nom:', formData.get('nom'));
    const nouveauFormateur: any = {
      nom: formData.get('nom') as string,
      prenom: formData.get('prenom'),
      email: formData.get('email'),
      telephone: formData.get('telephone'),
      motDePasse: formData.get('motdepasse'),
      specialite: formData.get('specialite'),
      dateNaissance: formData.get('datedenaissance'),
      photo: formData.get('file'),
      coutTotal :'100000'
      // Ajoute d'autres champs si nécessaire
    };
    console.log('Nouveau formateur:', nouveauFormateur);
    this.accueilservice.ajouterFormateur(nouveauFormateur).subscribe({
      next: (response: any) => {
      console.log('Formateur ajouté avec succès:', response);
      this.message1 = 'Formateur ajouté avec succès';
      setTimeout(() => {
        this.message1 = '';
        this.cd.detectChanges();
      }, 3000);
      this.cd.detectChanges(); // Met à jour la vue
      },
      error: (error: any) => {
      console.error('Erreur lors de l\'ajout du formateur:', error);
      this.message2 = 'Erreur lors de l\'ajout du formateur';
      setTimeout(() => {
        this.message1 = '';
        this.cd.detectChanges();
      }, 3000);
      }
    });
  }
  modifierformateur(formateur: any) {
    // Logique pour ouvrir une boîte de dialogue de modification du formateur
    console.log('Ouvrir la boîte de dialogue de modification pour le formateur:', formateur);
    // Tu peux implémenter la logique pour ouvrir une boîte de dialogue ici
    this.dialog.open(ModifierformateurComponent, {
      width: '700px',
      disableClose: false,
      data: { formateur: formateur }
    });
  }
  navigue(){
     this.router.navigate(['/authentification']);
  }
  
}
