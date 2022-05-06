import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit {
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
