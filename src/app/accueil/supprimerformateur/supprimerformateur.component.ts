import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { ChangeDetectorRef, Component, Inject } from '@angular/core';
import { AccueilService } from '../accueil.service';

@Component({
  selector: 'app-supprimerformateur',
  standalone: true,
  imports: [],
  templateUrl: './supprimerformateur.component.html',
  styleUrl: './supprimerformateur.component.css'
})
export class SupprimerformateurComponent {
 constructor(private cd:ChangeDetectorRef,private accueilservice:AccueilService, public dialogRef:DialogRef<SupprimerformateurComponent>,@Inject(DIALOG_DATA) public data: { formateur: any }) {}
  onCancel() {

    this.dialogRef.close();
  }
  onConfirm() {
    this.accueilservice.deleteFormateur(this.data.formateur.id).subscribe(() => {
      // Notifie le parent que le formateur a été supprimé
      this.dialogRef.close(this.data.formateur.id);
      this.cd.detectChanges();
    });
  }
}
