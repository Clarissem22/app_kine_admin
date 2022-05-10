import { Injectable } from '@angular/core';
import { getMaxListeners } from 'process';
import { Patient } from '../models/patient-model';

@Injectable({
  providedIn: 'root',
})
export class NewPatientService{


  constructor() { }


  private token!: string;

  patients: Patient[] = [
      {
          id: 1,
          nom: "Mille",
          prenom: "Clarisse",
          mail: "cmille749@gmail.com",
          telephone: "0633379002",
          diagnostic: "Douleurs dos",
          objectif: "rééducation",
          programme: "exerices dos",
          note: "Progresse rapidement"

      }
  ];
  getAllPatients(): Patient[]{
      return this.patients
  }

  login(): void {
    this.token = 'MyFakeToken';
  }

  getToken(): string {
    return this.token;
  }
  addPatient(formValue: {
    nom: string;
    prenom: string;
    birthday?: Date;
    mail?: string;
    telephone?: string;
    imageUrl?: string;
    dateDebutSuivi?: Date;
    diagnostic?: string;
    objectif?: string;
    programme?: string;
    lastConsultation?: Date;
    note?: string;
  }): void {
      const newPatient: Patient =  {
          ...formValue,
          id: this.patients[this.patients.length -1].id+1
      };
      this.patients.push(newPatient);
  }
}
