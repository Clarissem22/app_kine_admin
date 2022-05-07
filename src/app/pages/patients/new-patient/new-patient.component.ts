import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { map, Observable } from 'rxjs';
import { PatientComponent } from '../patient/patient.component';

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

  constructor(private formBuilder: FormBuilder) { }

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

  onSubmitForm(): void {
    console.log(this.newPatientForm.value);
    
  }
}
