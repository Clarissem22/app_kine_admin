import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Patient } from '../models/patient-model';
import { Observable, map, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewPatientService{
  private token!: string;
constructor(private http: HttpClient) {}

  getAllPatients(): Observable<Patient[]>{
      return this.http.get<Patient[]>('http://localhost:4200/patients')
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
  }): Observable<Patient> {
    return this.getAllPatients().pipe(
      map((patients) => 
      [...patients].sort((a: Patient, b: Patient) => a.id - b.id)
      ),
      map((sortedPatients)=> sortedPatients[sortedPatients.length -1]),
      map((previousPatient)=> ({
        ...formValue,
        id: previousPatient.id +1,
      })),
      switchMap((newPatient)=> 
      this.http.post<Patient>('http://localhost:4200/patients', newPatient)
    )
    );
  }
}
