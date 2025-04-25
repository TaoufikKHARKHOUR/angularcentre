import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'accueil', loadComponent: () => import('./accueil/accueil.component').then(m => m.AccueilComponent) },
  { path: 'formation', loadComponent: () => import('./formation/formation.component').then(m => m.FormationComponent) },
  { path: 'services', loadComponent: () => import('./services/services.component').then(m => m.ServicesComponent) },
  { path: 'contact', loadComponent: () => import('./contact/contact.component').then(m => m.ContactComponent) },
  { path: 'propos', loadComponent: () => import('./propos/propos.component').then(m => m.ProposComponent) },
];
