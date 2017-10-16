import { FormsModule } from '@angular/forms';
import { AccordionModule } from 'ngx-bootstrap/ng2-bootstrap';
import { CollapseModule } from 'ngx-bootstrap';
import { NgModule } from '@angular/core';

import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { ViewAppComponent } from './view.components';
import { AppRoutingModule } from './creditos-routing.module';
import { CommonModule } from '@angular/common';
import { HistoryCreditComponent } from './history-credit/history-credit.component';
import { SectionCreditsComponent } from './section-credits/section-credits.component';
import { ViewCreditComponent } from './view-credit/view-credit.component';

@NgModule({
  imports: [
    AppRoutingModule,
    ChartsModule,
    BsDropdownModule,
    CommonModule,
    CollapseModule,
    FormsModule,
    AccordionModule.forRoot()
  ],
  declarations: [ ViewAppComponent, HistoryCreditComponent, SectionCreditsComponent, ViewCreditComponent ]
})
export class CreditsModule { }
