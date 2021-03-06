import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { map, Observable, tap } from 'rxjs';
// import { NewPatientService } from 'src/app/core/services/new-patient.service';
import { PatientComponent } from '../patient/patient.component';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-new-patient',
  templateUrl: './new-patient.component.html',
  styleUrls: ['./new-patient.component.scss']
})
export class NewPatientComponent implements OnInit {
  logo!: string;
  newPatientForm!: FormGroup;
  newPatientPreview$!: Observable<PatientComponent>
  emailRegex!: RegExp;

  constructor(private formBuilder: FormBuilder,
              // private newPatientService: NewPatientService,
              private router: Router,
              private http: HttpClient ) { }

  ngOnInit(): void {
    this.logo = "../assets/img/logologin.png";
    this.emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    this.newPatientForm = this.formBuilder.group({
      nom: [null, Validators.required],
      prenom: [null, Validators.required],
      birthday: [null],
      mail: [null, Validators.required, Validators.pattern(this.emailRegex)],
      telephone: [null],
      imageUrl: [null],
      dateDebutSuivi: [null],
      diagnostic: [null],
      objectif: [null],
      programme: [null],
      lastConsultation: [null],
      note: [null],
    }, {
      updateOn: "blur"
    });

    this.newPatientPreview$ = this.newPatientForm.valueChanges.pipe(
      map(formValue => ({
        ...formValue,
        id: 0
      }))
    );
  }

  // onSubmitForm(): void{
  //   this.newPatientService.addPatient();
  //   this.addPatient();
    
    // this.newPatientService.addPatient(this.newPatientForm.value).pipe(
// this.router.navigateByUrl('/patients')
    // ).subscribe();
    



    onSubmitForm(): void {
      // this.http.get<any>('http://127.0.0.1:8000/addPatient')
      this.http.post('http://127.0.0.1:8000/addPatient',  this.newPatientForm )
      console.log("ok");
      this.router.navigateByUrl('/patients')
  
  
    }
  }



