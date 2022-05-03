import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bg-contact',
  templateUrl: './bg-contact.component.html',
  styleUrls: ['./bg-contact.component.scss']
})
export class BgContactComponent implements OnInit {

  constructor() { }
  title!:string;
  notification!:string;
  don!:string;

  ngOnInit(): void {
    this.title = "Contact";
    this.notification="/assets/img/bell.png";
    this.don="/assets/img/donations.png";
  }
  linkNotifications= "notifications"
  linkContact = "contact"

}
