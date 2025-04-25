import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideAnimations } from '@angular/platform-browser/animations';


bootstrapApplication(AppComponent, {
  providers: [provideAnimations()] //,{provide: ActivatedRoute} Enables Angular animations globally
}).catch(err => console.error(err));
bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));

