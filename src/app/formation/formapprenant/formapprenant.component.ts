import { Component } from '@angular/core';
import { DialogRef } from '@angular/cdk/dialog';
//import { Router,RouterModule } from '@angular/router';
@Component({
  selector: 'app-formapprenant',
  standalone: true,
  //imports: [RouterModule],
    templateUrl: './formapprenant.component.html',
  styleUrl: './formapprenant.component.css'
})
export class FormapprenantComponent {
  constructor(private dialogRef: DialogRef<FormapprenantComponent>/*,private router: Router*/ ) {}
  

  closeDialog() {
    this.dialogRef.close();
  }
  fermerFormulaire() {
    this.dialogRef.close();
    //this.router.navigate(['/formation']);
  }

}
