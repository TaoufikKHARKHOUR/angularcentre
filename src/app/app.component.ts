import { NgIf } from '@angular/common';
import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { RouterModule,Router} from '@angular/router';
//import { provideHttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule,NgIf],
  //providers: [], 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  title = 'centre';
  
  constructor(private router: Router) { }
  ngOnInit(): void {
    // Initialization logic can go here
  }
  navigateToFormation() {
    this.router.navigate(['/formation']);
  }
  isFormationPage(): boolean {
    return this.router.url === '/formation'
      || this.router.url.startsWith('/apprenants')
      || this.router.url === '/propos'
      || this.router.url === '/formateurs'
      || this.router.url === '/authentification'
      || this.router.url === '/accueil';
  }
  navigateToHome(){
    console.log('Navigating to home');
    this.router.navigate(['/']);
    console.log('Current URL:', this.router.url);
  }
}