import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bg-calendrier',
  templateUrl: './bg-calendrier.component.html',
  styleUrls: ['./bg-calendrier.component.scss']
})
export class BgCalendrierComponent implements OnInit {
  constructor() { }
  title!:string;
  notification!:string;
  don!:string;

  ngOnInit(): void {
    this.title = "Calendrier";
    this.notification="/assets/img/bell.png";
    this.don="/assets/img/donations.png";
  }
  linkNotifications= "notifications"
  linkContact = "contact"

}
