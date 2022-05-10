import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Exercices } from '../../../core/models/exercice-model';
import { NewExercicesService } from '../../../core/services/new-exercices.service';

@Component({
  selector: 'app-bg-exercices',
  templateUrl: './bg-exercices.component.html',
  styleUrls: ['./bg-exercices.component.scss']
})
export class BgExercicesComponent implements OnInit {

  @Input() exercice!:Exercices
  exercices$!: Observable<Exercices[]>;

  constructor() { }

  title!:string;
  notification!:string;
  don!:string;
  linkNotifications= "notifications"
  linkContact = "contact"


  ngOnInit(): void {
    // Titre et images
    this.title = "Exercices";
    this.notification="/assets/img/bell.png";
    this.don="/assets/img/donations.png";

  }


}
