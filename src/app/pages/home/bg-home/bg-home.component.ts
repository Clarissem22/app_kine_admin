import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bg-home',
  templateUrl: './bg-home.component.html',
  styleUrls: ['./bg-home.component.scss']
})
export class BgHomeComponent implements OnInit {
  constructor() { }
  title!:string;
  notification!:string;
  don!:string;

  ngOnInit(): void {
    this.title = "Accueil";
    this.notification="/assets/img/bell.png";
    this.don="/assets/img/donations.png";
  }

  linkNotifications= "notifications"
  linkContact = "contact"
}
