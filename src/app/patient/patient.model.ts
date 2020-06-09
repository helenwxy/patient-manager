export class Patient {
  constructor(
    public lastName: string,
    public firstName: string,
    public dob: string,
    public phNumber: string,
    public primaryDiagnosis: string,
    public secondaryDiagnosis: string,
    public codeStatus: CodeStatus) {

  }
}

export enum CodeStatus {
  cprC2 = 'CPR-C2',
  dnrC1 = 'DNR-C1',
  dnrM1 = 'DNR-M1',
  dnrM2 = 'DNR-M2',
  dnrM3 = 'DNR-M3',
}
