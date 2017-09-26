import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './client-routing.module';

import { ClientComponent } from './client.component';
import { EditClientComponent } from './edit-client/edit-client.component';
import { InfoClientPhysicComponent } from './info-client-physic/info-client-physic.component';
import { InfoClientMoralComponent } from './info-client-moral/info-client-moral.component';

import { TabsModule } from 'ngx-bootstrap/tabs';
import { AccordionModule } from 'ngx-bootstrap';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BankPComponent } from './info-client-physic/bank-p/bank-p.component';
import { BankMComponent } from './info-client-moral/bank-m/bank-m.component';
import { FilesMComponent } from './info-client-moral/files-m/files-m.component';
import { FilesPComponent } from './info-client-physic/files-p/files-p.component';
import { RegistryPComponent } from './info-client-physic/registry-p/registry-p.component';
import { RegistryMComponent } from './info-client-moral/registry-m/registry-m.component';
import { ManagersMComponent } from './info-client-moral/managers-m/managers-m.component';
import { SharedHolderMComponent } from './info-client-moral/shared-holder-m/shared-holder-m.component';


@NgModule({
  imports: [
    AppRoutingModule,
    ChartsModule,
    BsDropdownModule.forRoot(),
    CommonModule,
    TabsModule.forRoot(),
    AccordionModule.forRoot(),
    FormsModule,
  ],
  declarations: [ClientComponent, InfoClientMoralComponent, InfoClientPhysicComponent, EditClientComponent, BankPComponent,
     BankMComponent, FilesMComponent, FilesPComponent, RegistryPComponent, RegistryMComponent, ManagersMComponent, SharedHolderMComponent]
})
export class AppModule { }
