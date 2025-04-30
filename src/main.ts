import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { appConfig } from './app/app.config';


//bootstrapApplication(AppComponent, appConfig).catch(err => console.error(err));
/*bootstrapApplication(AppComponent, { 
  providers: [
    provideHttpClient(withFetch()),
    provideAnimations()
  ]
}).catch(err => console.error(err));*/
bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: [
    ...(appConfig.providers || []),
    provideHttpClient(withFetch()),
    provideAnimations()
  ]
}).catch(err => console.error(err));