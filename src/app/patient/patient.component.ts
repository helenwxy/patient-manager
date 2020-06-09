import { Component, OnInit } from '@angular/core';
import {Patient} from './patient.model';
import {PatientService} from './patient.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css'],
  providers: [PatientService]
})
export class PatientComponent implements OnInit {
  selectedPatient: Patient;
  constructor(private patientService: PatientService) { }

  ngOnInit() {
    this.patientService.patientSelected
      .subscribe(
        ()
      )
  }

}
