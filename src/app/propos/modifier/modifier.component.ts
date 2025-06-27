import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { Dialog, DIALOG_DATA } from '@angular/cdk/dialog';
import { Inject } from '@angular/core';
@Component({
  selector: 'app-modifier',
  standalone: true,
  imports: [NgIf,FormsModule],
  templateUrl: './modifier.component.html',
  styleUrl: './modifier.component.css'
})
export class ModifierComponent {
  message: string = '';
  message2: string = '';

  // This method is called when the form is submitted
  // It prevents the default form submission behavior
  // and processes the form data
  constructor(@Inject(DIALOG_DATA) public data: { formation: any },public dialog:Dialog) {}
  formation: any = {};

  ngOnInit() {
    if (this.data && this.data.formation) {
      this.formation = { ...this.data.formation };
      console.log('Formation data received:', this.formation);
    }
  }
  selectedFile: File | null = null;

onFileChange(event: any) {
  const file = event.target.files[0];
  if (file) {
    this.selectedFile = file;
  }
}
close(){
   this.dialog.closeAll();
}
  
  // This method handles the form submission event
  // It can be used to process the form data and perform actions like saving or updating
  // For now, it does nothing
onSubmit(event: Event) {}
}
