import { Component } from '@angular/core';
import { DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'app-formapprenant',
  standalone: true,
    templateUrl: './formapprenant.component.html',
  styleUrl: './formapprenant.component.css'
})
export class FormapprenantComponent {
  constructor(private dialogRef: DialogRef<FormapprenantComponent>) {}

  closeDialog() {
    this.dialogRef.close();
  }


}
