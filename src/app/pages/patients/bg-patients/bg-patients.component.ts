import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bg-patients',
  templateUrl: './bg-patients.component.html',
  styleUrls: ['./bg-patients.component.scss']
})
export class BgPatientsComponent implements OnInit {
  constructor(private router: Router) { }
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


  onAddNewPatient(): void {
    this.router.navigateByUrl('/create')
  }
}
