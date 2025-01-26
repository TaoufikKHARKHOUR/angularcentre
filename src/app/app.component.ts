import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { Router,RouterOutlet, RouterLink} from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgFor, NgIf,RouterLink,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent{
  title = 'centre';
  showFormationList: boolean = false;
  formations: string[] = ['Développement Web', 'Développement Mobile', 'Data Science', 'Langues Étrangères', 'Cybersécurité'];
  constructor(private router: Router) {}
  navigateToFormation() {
    this.router.navigate(['/formation']); // Navigate to '/formation' route
  }
  showList(){
    this.showFormationList = true;
  }
  hideList() {
    this.showFormationList = false;
  }
  filteredFormations = [...this.formations];
  searchTerm = '';
  onSearch() {
    this.filteredFormations = this.formations.filter((formation) =>
      formation.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

}