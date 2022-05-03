import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendrierComponent } from './pages/calendrier/calendrier.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ExercicesComponent } from './pages/exercices/exercices.component';
import { HomeComponent } from './pages/home/home.component';
import { InscriptionComponent } from './pages/inscription/inscription.component';
import { LoginComponent } from './pages/login/login.component';
import { ParametresComponent } from './pages/parametres/parametres.component';

const routes: Routes = [
  {path: "", component: LoginComponent },
  {path: "inscription", component: InscriptionComponent},
  {path: "home", component: HomeComponent },
  {path: "exercices", component: ExercicesComponent },
  {path: "calendrier", component: CalendrierComponent },
  {path: "contact", component: ContactComponent },
  {path: "parametres", component: ParametresComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
