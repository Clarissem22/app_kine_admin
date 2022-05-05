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

  constructor() {
    this.date= new Date ();
   }

  ngOnInit(): void {
    this.nom = "Samuel";
    this.photo = "assets/img/kineprofil.png";
    this.nbrexo = 2;
  }

}
