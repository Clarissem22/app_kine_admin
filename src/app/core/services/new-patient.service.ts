import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Patient } from '../models/patient-model';
import { Observable, map, switchMap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class NewPatientService{
  private token!: string;
constructor(private http: HttpClient,
            private router: Router) {}

  // getAllPatients(): Observable<Patient[]>{
  //     return this.http.get<Patient[]>('http://localhost:4200/create')
  // }

  login(): void {
    this.token = 'MyFakeToken';
  }

  getToken(): string {
    return this.token;
  }

  addPatient() {
    // this.http.get<any>('http://127.0.0.1:8000/addPatient')
    // this.http.post('http://127.0.0.1:8000/addPatient', )
    console.log("ok");
    // this.router.navigateByUrl('/patients')


  }


  // addPatient(formValue: {
  //   nom: string;
  //   prenom: string;
  //   birthday?: Date;
  //   mail?: string;
  //   telephone?: string;
  //   imageUrl?: string;
  //   dateDebutSuivi?: Date;
  //   diagnostic?: string;
  //   objectif?: string;
  //   programme?: string;
  //   lastConsultation?: Date;
  //   note?: string;
  // }): Observable<Patient> {
  //   return this.getAllPatients().pipe(
  //     map((patients) => 
  //     [...patients].sort((a: Patient, b: Patient) => a.id - b.id)
  //     ),
  //     map((sortedPatients)=> sortedPatients[sortedPatients.length -1]),
  //     map((previousPatient)=> ({
  //       ...formValue,
  //       id: previousPatient.id +1,
  //     })),
  //     switchMap((newPatient)=> 
  //     this.http.post<Patient>('http://localhost:4200/patients', newPatient)
  //   )
  //   );
  // }
}
