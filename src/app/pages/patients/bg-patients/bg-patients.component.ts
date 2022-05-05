import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bg-patients',
  templateUrl: './bg-patients.component.html',
  styleUrls: ['./bg-patients.component.scss']
})
export class BgPatientsComponent implements OnInit {
  constructor() { }
  title!:string;
  notification!:string;
  don!:string;

  ngOnInit(): void {
    this.title = "Patients";
    this.notification="/assets/img/bell.png";
    this.don="/assets/img/donations.png";
  }
  linkNotifications= "notifications"
  linkContact = "contact"

}
