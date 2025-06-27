import { Component } from '@angular/core';
import { DIALOG_DATA } from '@angular/cdk/dialog';
import { Inject } from '@angular/core';
@Component({
  selector: 'app-formationdetailsdialog',
  standalone: true,
  imports: [],
  templateUrl: './formationdetailsdialog.component.html',
  styleUrl: './formationdetailsdialog.component.css'
})
export class FormationdetailsdialogComponent {
constructor(@Inject(DIALOG_DATA) public data: { formation: any }) {}
}
