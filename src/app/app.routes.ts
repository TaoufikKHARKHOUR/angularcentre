import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FormationComponent } from './formation/formation.component';
import { NgModule } from '@angular/core';
import { AccueilComponent } from './accueil/accueil.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { ProposComponent } from './propos/propos.component';
export const routes: Routes = [
  {path:'formation',component:FormationComponent},{path:'accueil',component:AccueilComponent},
  {path:'services',component:ServicesComponent},{path:'contact',component:ContactComponent},{path:'propos',component:ProposComponent}
];
export class AboutComponent {
}