import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from '../../../core/models/patient-model';

@Component({
  selector: 'app-bg-patients',
  templateUrl: './bg-patients.component.html',
  styleUrls: ['./bg-patients.component.scss']
})
export class BgPatientsComponent implements OnInit {
  @Input() patient!: Patient
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
  linkCreate= "create"


  onAddNewPatient(): void {
    this.router.navigateByUrl('create')
  }
}