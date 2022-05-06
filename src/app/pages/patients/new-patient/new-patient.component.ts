import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-patient',
  templateUrl: './new-patient.component.html',
  styleUrls: ['./new-patient.component.scss']
})
export class NewPatientComponent implements OnInit {

  snapForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.snapForm = this.formBuilder.group({
      nom: [null],
      prenom: [null],
      birthday: [null],
      mail: [null],
      telephone: [null],
      imageUrl: [null],
      dateDebutSuivi: [null],
      diagnostic: [null],
      objectif: [null],
      programme: [null],
      lastConsultation: [null],
      note: [null],
    })
  }

  onSubmitForm(): void {
    console.log(this.snapForm.value);
    
  }
}
