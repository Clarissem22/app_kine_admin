import { Component, Input, OnInit } from '@angular/core';
import { sample } from 'rxjs';
import { Patient } from 'src/app/core/models/patient-model';
import { NewPatientService } from '../../../core/services/new-patient.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit {
  @Input() patient!: Patient;
  date? : Date;
  nom!: string;
  photo!:string;
  nbrexo?:number;

  id!: number;
          prenom!: string;
          birthday?: string;
          mail?:string;
          telephone?:string;
          imageUrl?: string;
          dateDebutSuivi?: string;
          diagnostic?: string;
          objectif?: string;
          programme?: string;
          lastConsultation?: string;
          note?: string;
  constructor() {
    this.date= new Date ();
   }

  ngOnInit(): void {
    this.id= 0;
    this.nom = "Sam";
    this.prenom = "Samuel";
    this.imageUrl= "assets/img/kineprofil.png";
    this.birthday= "24/06/1998";
    this.mail= "Samuel@sam.fr";
    this.telephone= "0633379002" ;
    this.dateDebutSuivi= "22/02/2022" ;
    this.diagnostic= "Mal dos" ;
    this.objectif= "Soulager dos";
    this.programme= "Exercices dos";
    this.lastConsultation= "09/05/2022";
    this.note= "Super";
    
  }

}
