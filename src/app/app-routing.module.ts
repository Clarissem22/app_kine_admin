import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { InscriptionComponent } from './pages/inscription/inscription.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {path: "", component: LoginComponent },
  {path: "inscription", component: InscriptionComponent},
  {path: "home", component: HomeComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
