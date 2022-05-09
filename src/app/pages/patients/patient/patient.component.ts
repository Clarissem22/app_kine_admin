import { Component, Input, OnInit } from '@angular/core';
import { Patient } from 'src/app/core/models/patient-model';
import { NewPatientService } from '../../../core/services/new-patient.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit {
  @Input() patient!: Patient;
  date : Date;
  nom!: string;
  photo!:string;
  nbrexo!:number;

  id!: number;
          prenom!: string;
          birthday?: Date;
          mail?:string;
          telephone?:string;
          imageUrl?: string;
          dateDebutSuivi?: Date;
          diagnostic?: string;
          objectif?: string;
          programme?: string;
          lastConsultation?: Date;
          note?: string;
  constructor() {
    this.date= new Date ();
   }

  ngOnInit(): void {
    this.nom = "Samuel";
    this.photo = "assets/img/kineprofil.png";
    this.nbrexo = 2;
  }

}
