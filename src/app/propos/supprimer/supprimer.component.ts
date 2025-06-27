import { SuppressionService } from './suppression.service';
import { Component,Inject } from '@angular/core';
import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
@Component({
  selector: 'app-supprimer',
  standalone: true,
  imports: [],
  templateUrl: './supprimer.component.html',
  styleUrl: './supprimer.component.css'
})
export class SupprimerComponent {
  formation: any = {};
  constructor(
    public dialogRef: DialogRef<SupprimerComponent>,
    @Inject(DIALOG_DATA) public data: any, private suppressionService:SuppressionService
  ) {}
 ngOnInit() {
    if (this.data && this.data.formation) {
      this.formation = { ...this.data.formation };
      console.log('Formation data received:', this.formation);
    }
  }
  fermerdialog() {
    this.dialogRef.close();
  }

  supprimerformation() {
    console.log('Suppression de la formation:', this.formation.id);
     this.suppressionService.deleteFormation(this.formation.idformation);
    console.log('Suppression de la formation:', this.formation);
    this.dialogRef.close(this.data); // Close the dialog and return the data
  }
}
