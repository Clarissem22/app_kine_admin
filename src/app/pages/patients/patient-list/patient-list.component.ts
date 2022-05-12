import { Component, OnInit, Input } from '@angular/core';
import { Patient } from 'src/app/core/models/patient-model';
import { Observable } from 'rxjs';
import { NewPatientService } from '../../../core/services/new-patient.service';

@Component({

  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.scss']
})
export class PatientListComponent implements OnInit {
  @Input() patient!: Patient
  patients!: Patient[];
  patients$!: Observable<Patient[]>;

  constructor(private newPatientService: NewPatientService) { }

  ngOnInit(): void {
    // this.patients$ = this.newPatientService.getAllPatients();
  }

}
