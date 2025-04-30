import { Component } from '@angular/core';
import { ProposService } from './propos.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-propos',
  standalone: true,
  imports: [NgIf],
  templateUrl: './propos.component.html',
  styleUrl: './propos.component.css'
})
export class ProposComponent {
  message: string = ''; 
  constructor(private proposService: ProposService) {}

  onSubmit(event: Event) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    this.message = 'La formation a été enregistrée avec succès !';
    this.proposService.addformation(formData).subscribe(
      (response) => {
        console.log('Formation ajoutée avec succès', response);
        this.message = 'La formation a été enregistrée avec succès !';
      },
    (error) => { console.error('Erreur lors de l\'ajout de la formation', error);
        this.message = 'Erreur lors de l\'ajout de la formation. Veuillez réessayer.';  }
    )    
    
  }
}
