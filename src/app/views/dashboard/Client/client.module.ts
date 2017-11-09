import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { RestPasswordComponent } from './rest-password/rest-password.component';
import { DatepickerModule } from 'angular2-material-datepicker';
import { ApplicationModule } from './../Solicitudes/solicitudes.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './client-routing.module';

import { ClientComponent } from './client.component';
import { InfoClientPhysicComponent } from './info-client-physic/info-client-physic.component';
import { InfoClientMoralComponent } from './info-client-moral/info-client-moral.component';

import { TabsModule } from 'ngx-bootstrap/tabs';
import { AccordionModule } from 'ngx-bootstrap';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { FilesComponent } from './shared/files/files.component';
import { RegistryPComponent } from './info-client-physic/registry-p/registry-p.component';
import { RegistryMComponent } from './info-client-moral/registry-m/registry-m.component';
import { ManagersMComponent } from './info-client-moral/managers-m/managers-m.component';
import { SharedHolderMComponent } from './info-client-moral/shared-holder-m/shared-holder-m.component';
import { ManagersSectionComponent } from './info-client-moral/managers-m/managers-section/managers-section.component';
import { SharedHolderSectionComponent } from './info-client-moral/shared-holder-m/shared-holder-section/shared-holder-section.component';
import { BankComponent } from './shared/bank/bank.component';
import { BankSectionComponent } from './shared/bank/bank-section/bank-section.component';


@NgModule({
  imports: [
    AppRoutingModule,
    ChartsModule,
    BsDropdownModule.forRoot(),
    CommonModule,
    TabsModule.forRoot(),
    AccordionModule.forRoot(),
    FormsModule,
    ApplicationModule,
    DatepickerModule,
    BsDatepickerModule.forRoot()
  ],
  declarations: [ClientComponent, InfoClientMoralComponent, InfoClientPhysicComponent,
     FilesComponent, RegistryPComponent, RegistryMComponent, ManagersMComponent,
     SharedHolderMComponent, ManagersSectionComponent, SharedHolderSectionComponent,
      BankComponent, BankSectionComponent, RestPasswordComponent]
})
export class ClientsModule { }
