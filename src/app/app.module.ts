import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HeaderComponent} from './header/header.component';
import { PatientComponent } from './patient/patient.component';
import { PatientDetailComponent } from './patient/patient-detail/patient-detail.component';
import { UnitComponent } from './unit/unit.component';
import { PatientListComponent } from './patient/patient-list/patient-list.component';
import { RoomEditComponent } from './unit/unit-detail/room-edit.component';
import { PatientInfoComponent } from './patient/patient-list/patient-system/patient-info.component';
import { DropdownDirective } from './shared/dropdown.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PatientComponent,
    PatientDetailComponent,
    UnitComponent,
    PatientListComponent,
    RoomEditComponent,
    PatientInfoComponent,
    DropdownDirective,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
