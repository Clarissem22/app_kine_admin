import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Exercices } from '../../core/models/exercice-model';
import { NewExercicesService } from '../../core/services/new-exercices.service';


@Component({
  selector: 'app-exercices',
  templateUrl: './exercices.component.html',
  styleUrls: ['./exercices.component.scss']
})
export class ExercicesComponent implements OnInit {

  exercices$!: Observable<Exercices[]>;


  constructor(){}

  ngOnInit(): void {
  }

}
