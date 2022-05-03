import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bg-exercices',
  templateUrl: './bg-exercices.component.html',
  styleUrls: ['./bg-exercices.component.scss']
})
export class BgExercicesComponent implements OnInit {

  constructor() { }
  title!:string;
  notification!:string;
  don!:string;

  ngOnInit(): void {
    this.title = "Exercices";
    this.notification="/assets/img/bell.png";
    this.don="/assets/img/donations.png";
  }

  linkNotifications= "notifications"
  linkContact = "contact"
}
