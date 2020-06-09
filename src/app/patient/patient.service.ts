import {CodeStatus, Patient} from './patient.model';
import {EventEmitter} from '@angular/core';

export class PatientService {
  patientSelected = new EventEmitter<Patient>();
  private patients: Patient[] = [
    new Patient('Doe', 'John', '1992/12/24', '1234556', 'Heart failure', null, CodeStatus.cprC2),
    new Patient('Doe', 'Abbababababababa', '1992/12/24', '1234556', 'Heart failure', null, CodeStatus.cprC2)
  ];

  getPatients() {
    return this.patients.slice();
  }
}
