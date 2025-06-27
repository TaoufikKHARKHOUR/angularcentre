import { Dialog, DialogModule } from '@angular/cdk/dialog';
import { NgFor } from '@angular/common';
import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { SupprimerapprenantComponent } from './supprimerapprenant/supprimerapprenant.component';
import { ApprenantsService } from './apprenants.service';

@Component({
  selector: 'app-apprenants',
  standalone: true,
  imports: [RouterModule,NgFor,DialogModule],
  templateUrl: './apprenants.component.html',
  styleUrl: './apprenants.component.css'
})
export class ApprenantsComponent implements OnInit {
     formation: any;
     apprenantss: any[] = []; // Initialiser comme un tableau vide
    inscriptions: any[] = []; // Initialiser comme un tableau vide

  constructor(private route: ActivatedRoute,private dialog:Dialog,private apprenantservice:ApprenantsService) {}
  

supprimerApprenant(index: number) {
  //this.apprenants.splice(index, 1);
  this.dialog.open(SupprimerapprenantComponent, {
    width: '600px',
    disableClose: false, // Prevent closing the dialog by clicking outside
    data: { apprenant: this.apprenantss[index] }
  });
}

  ngOnInit(): void {
    // Récupérer le paramètre `formation` depuis les queryParams ou les params
    this.route.queryParams.subscribe(params => {
      console.log('Query params:', params);
      let formationJson = params['formation'];
      if (!formationJson) {
        // Essayer de récupérer depuis les params si non trouvé dans queryParams
        this.route.params.subscribe(routeParams => {
          formationJson = routeParams['formation'];
          if (formationJson) {
            this.formation = JSON.parse(formationJson);
            console.log('Formation reçue depuis params :', this.formation);
          } else {
            console.error('Aucune formation reçue dans queryParams ni params');
          }
        });
      } else {
        this.formation = JSON.parse(formationJson); // Désérialiser l'objet JSON
        console.log('Formation reçue :', this.formation.idformation);
        console.log('Formation ID:', this.apprenantservice.getAllApprenants());
        console.log('inscriptions:', this.apprenantservice.getAllInscription());
      }
    }); 
    console.log('Formation dans ngOnInit:', this.formation);
    // Remplir le tableau inscriptions avec les inscriptions correspondant à la formation sélectionnée
    const allInscriptions = this.apprenantservice.getAllInscription();
    if (
      this.formation &&
      this.formation.idformation &&
      Array.isArray(allInscriptions)
    ) {
      this.inscriptions = allInscriptions.filter(
        (inscription: any) =>
          inscription.formation &&
          inscription.formation.idformation === this.formation.idformation
      );
      console.log('Inscriptions filtrées:', this.inscriptions);
      this.apprenantss = this.inscriptions.map((inscription: any) => inscription.apprenant);
      console.log('Apprenants filtrés:', this.apprenantss);
    } else {
      this.inscriptions = [];
      this.apprenantss = [];
      if (!Array.isArray(allInscriptions)) {
        console.error('allInscriptions is not an array:', allInscriptions);
      }
    }
  
  }


}
