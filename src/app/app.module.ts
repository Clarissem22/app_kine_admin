import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
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
import { PatientsComponent } from './pages/patients/patients.component';
import { AuthModule } from './auth/auth.module';
import { PatientComponent } from './pages/patients/patient/patient.component';
import { BgPatientsComponent } from './pages/patients/bg-patients/bg-patients.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewPatientComponent } from './pages/patients/new-patient/new-patient.component';
import { PatientListComponent } from './pages/patients/patient-list/patient-list.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
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
    PatientsComponent,
    BgPatientsComponent,
    PatientComponent,
    NewPatientComponent,
    PatientListComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CdkAccordionModule,
    AuthModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
