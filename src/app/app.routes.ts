import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'accueil', loadComponent: () => import('./accueil/accueil.component').then(m => m.AccueilComponent) },
  { path: 'formation', loadComponent: () => import('./formation/formation.component').then(m => m.FormationComponent) },
  { path: 'authentification', loadComponent: () => import('./authentification/authentification.component').then(m => m.AuthentificationComponent) },
  { path: 'formateurs', loadComponent: () => import('./formateurs/formateurs.component').then(m => m.FormateursComponent) },
  { path: 'propos', loadComponent: () => import('./propos/propos.component').then(m => m.ProposComponent) },
  {path: 'apprenants', loadComponent: () => import('./apprenants/apprenants.component').then(m => m.ApprenantsComponent) },
];
