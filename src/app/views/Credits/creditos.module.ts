import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { ViewAppComponent } from './view.components';
import { AppRoutingModule } from './creditos-routing.module';
import { CommonModule } from '@angular/common';
import { HistoryCreditComponent } from './history-credit/history-credit.component';

@NgModule({
  imports: [
    AppRoutingModule,
    ChartsModule,
    BsDropdownModule,
    CommonModule
  ],
  declarations: [ ViewAppComponent, HistoryCreditComponent ]
})
export class AppModule { }
