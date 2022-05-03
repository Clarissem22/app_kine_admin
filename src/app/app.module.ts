import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { InscriptionComponent } from './pages/inscription/inscription.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BgHomeComponent } from './pages/home/bg-home/bg-home.component';
import { HelloComponent } from './pages/home/hello/hello.component';
import { ExercicesComponent } from './pages/exercices/exercices.component';
import { ListeExercicesComponent } from './pages/exercices/liste-exercices/liste-exercices.component';
import { BgExercicesComponent } from './pages/exercices/bg-exercices/bg-exercices.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CdkAccordionComponent } from './components/cdk-accordion/cdk-accordion.component';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import { BgContactComponent } from './pages/contact/bg-contact/bg-contact.component';
import { ParametresComponent } from './pages/parametres/parametres.component';
import { CalendrierComponent } from './pages/calendrier/calendrier.component';
import { BgCalendrierComponent } from './pages/calendrier/bg-calendrier/bg-calendrier.component';
import { CalendarComponent } from './components/calendar/calendar.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    InscriptionComponent,
    NavbarComponent,
    BgHomeComponent,
    HelloComponent,
    ExercicesComponent,
    ListeExercicesComponent,
    BgExercicesComponent,
    ContactComponent,
    CdkAccordionComponent,
    BgContactComponent,
    ParametresComponent,
    CalendrierComponent,
    BgCalendrierComponent,
    CalendarComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CdkAccordionModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
