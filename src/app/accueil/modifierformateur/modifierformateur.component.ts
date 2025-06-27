import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-modifierformateur',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './modifierformateur.component.html',
  styleUrl: './modifierformateur.component.css'
})
export class ModifierformateurComponent {
   constructor(public dialogRef:DialogRef<ModifierformateurComponent>,@Inject(DIALOG_DATA) public data: { formateur: any }){}
  onCancel(){
    this.dialogRef.close();
  }
  formateur:any = {};
    showPassword: boolean = false;

  ngOnInit() {
    if (this.data && this.data.formateur) {
      this.formateur = { ...this.data.formateur };
      console.log('Formateur data received:', this.formateur);
    }
  }
  
}
