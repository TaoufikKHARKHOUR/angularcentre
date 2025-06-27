import { DIALOG_DATA, DialogModule, DialogRef ,Dialog} from '@angular/cdk/dialog';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-supprimerapprenant',
  standalone: true,
  imports: [],
  templateUrl: './supprimerapprenant.component.html',
  styleUrl: './supprimerapprenant.component.css'
})
export class SupprimerapprenantComponent {
  
    constructor(public dialogRef:DialogRef<SupprimerapprenantComponent>,@Inject(DIALOG_DATA) public data: { apprenant: any }) {}
  fermerdialog() {
    this.dialogRef.close();
  }
  supprimerapprenant(index: number) {
    this.data.apprenant.splice(index, 1);
    console.log('Suppression de l’apprenant:', this.data.apprenant);
    // Ici, vous pouvez appeler un service pour effectuer la suppression
    // Par exemple : this.apprenantService.deleteApprenant(this.data.apprenant.id);
    this.dialogRef.close(); // Ferme le dialogue et retourne true pour indiquer la suppression
  }
}
