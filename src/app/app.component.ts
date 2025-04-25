import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { RouterModule} from '@angular/router';
//import { provideHttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  //providers: [], 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  title = 'centre';
  
  constructor() { }
  ngOnInit(): void {
    // Initialization logic can go here
  }
}