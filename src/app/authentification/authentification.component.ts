import { NgIf } from '@angular/common';
import { AuthentificationService } from './authentification.service';
import { ChangeDetectorRef, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-services',
  standalone: true,
  imports: [FormsModule,NgIf],
  templateUrl: './authentification.component.html',
  styleUrl: './authentification.component.css'
})
export class AuthentificationComponent {
  constructor(private cd: ChangeDetectorRef,private authentificationService:AuthentificationService,private router:Router){}
  showPassword: boolean = false;
  message1: string = '';
onSubmit(event: Event) {
    //event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    let adminCredentials:any[] = [];
    let formateurCredentials:any[] = [];
    // Simulate a successful login
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const typeDUtilisateur = formData.get('userType') as string;
    console.log('Email:', email, 'Password:', password, 'Type d\'utilisateur:', typeDUtilisateur);
    if (typeDUtilisateur === 'admin') {
      this.authentificationService.getAdministrateur().subscribe((admins: any[]) => {
        adminCredentials = admins.map((admin: any) => ({
          email: admin.email,
          password: admin.motdepasse
        }));
        const found: boolean = adminCredentials.some(
          (cred) => cred.email === email && cred.password === password
        );
        if (found) {
          console.log('Connexion réussie pour admin');
          this.router.navigate(['/accueil']);
          // Redirection ou autre logique ici
        } else {
          console.log('Email ou mot de passe admin incorrect');
           console.log(found);
           this.message1 = "Email ou mot de passe ou type d'utilisateur incorrect";
           this.cd.detectChanges();
           setTimeout(() => {
            this.message1 = '';
            this.cd.detectChanges();
            }, 3000);
        }
      });
    }else if (typeDUtilisateur === 'formateur') {
      this.authentificationService.getAllFormateurs().subscribe((formateurs: any[]) => {
        formateurCredentials = formateurs.map((formateur: any) => ({
          email: formateur.email,
          password: formateur.motdepasse
        }));
        const found: boolean = formateurCredentials.some(
          (cred) => cred.email === email && cred.password === password
        );
        if (found) {
            const formateur = formateurs.find((f: any) => f.email === email && f.motdepasse === password);
            if (formateur) {
            this.authentificationService.setFormateur(formateur);
            console.log(formateur.id);
            }else{console.log("errrrrrrrrrrrr");}
          console.log('Connexion réussie pour formateur');
           this.router.navigate(['/propos']);
          // Redirection ou autre logique ici
        } else {
          console.log('Email ou mot de passe formateur incorrect');
          console.log(found);
            this.message1 = "Email ou mot de passe ou type d'utilisateur incorrect";
            this.cd.detectChanges();
            setTimeout(() => {
            this.message1 = '';
            this.cd.detectChanges();
            }, 3000);
        }
       
      });
       
     }
}
}
