import { Component, OnInit, Input } from '@angular/core';
import { Exercices } from '../../../core/models/exercice-model';
import { Observable } from 'rxjs';
import { NewExercicesService } from '../../../core/services/new-exercices.service';

@Component({
  selector: 'app-liste-exercices',
  templateUrl: './liste-exercices.component.html',
  styleUrls: ['./liste-exercices.component.scss']
})
export class ListeExercicesComponent implements OnInit {
  @Input() exercice!:Exercices
  exercices$!: Observable<Exercices[]>;

  constructor(private newExercicesService: NewExercicesService) { }

  ngOnInit(): void {
    this.exercices$ = this.newExercicesService.getAllExercices();
  }

}


