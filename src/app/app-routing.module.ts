import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { CalendrierComponent } from './pages/calendrier/calendrier.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ExercicesComponent } from './pages/exercices/exercices.component';
import { HomeComponent } from './pages/home/home.component';
import { InscriptionComponent } from './pages/inscription/inscription.component';
import { ParametresComponent } from './pages/parametres/parametres.component';
import { PatientsComponent } from './pages/patients/patients.component';
import { NewPatientComponent } from './pages/patients/new-patient/new-patient.component';

const routes: Routes = [
  {path: "inscription", component: InscriptionComponent, canActivate: [AuthGuard]},
  {path: "home", component: HomeComponent, canActivate: [AuthGuard] },
  {path: "exercices", component: ExercicesComponent, canActivate: [AuthGuard] },
  {path: "calendrier", component: CalendrierComponent, canActivate: [AuthGuard] },
  {path: "patients", component: PatientsComponent, canActivate: [AuthGuard] },
  {path: "create", component: NewPatientComponent},
  {path: "contact", component: ContactComponent, canActivate: [AuthGuard] },
  {path: "parametres", component: ParametresComponent, canActivate: [AuthGuard] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
