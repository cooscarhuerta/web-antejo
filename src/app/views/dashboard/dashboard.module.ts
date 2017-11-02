import { ClientComponent } from './Client/client.component';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';

import { ApplicationModule } from './Solicitudes/solicitudes.module';

@NgModule({
  imports: [
    DashboardRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ApplicationModule,
    CommonModule,

  ],
  declarations: [DashboardComponent],
  exports: []
})


export class DashboardModule { }
