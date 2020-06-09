import {Component, Input, OnInit, Output} from '@angular/core';
import {Patient} from '../../patient.model';
import {PatientService} from '../../patient.service';

@Component({
  selector: 'app-patient-system',
  templateUrl: './patient-info.component.html',
  styleUrls: ['./patient-info.component.css']
})
export class PatientInfoComponent implements OnInit {
  @Input() patient: Patient;
  constructor(private patientService: PatientService) { }

  ngOnInit() {
  }

  onSelected() {
    this.patientService.patientSelected.emit(this.patient);
  }

}
