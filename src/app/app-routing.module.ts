import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { CalendrierComponent } from './pages/calendrier/calendrier.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ExercicesComponent } from './pages/exercices/exercices.component';
import { HomeComponent } from './pages/home/home.component';
import { InscriptionComponent } from './pages/inscription/inscription.component';
import { ParametresComponent } from './pages/parametres/parametres.component';

const routes: Routes = [
  {path: "inscription", component: InscriptionComponent, canActivate: [AuthGuard]},
  {path: "home", component: HomeComponent, canActivate: [AuthGuard] },
  {path: "exercices", component: ExercicesComponent, canActivate: [AuthGuard] },
  {path: "calendrier", component: CalendrierComponent, canActivate: [AuthGuard] },
  {path: "contact", component: ContactComponent, canActivate: [AuthGuard] },
  {path: "parametres", component: ParametresComponent, canActivate: [AuthGuard] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
