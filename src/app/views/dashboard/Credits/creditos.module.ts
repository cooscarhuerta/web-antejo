import { PayDetailModalComponent } from './view-credit/pay-detail.component';
import { ModalModule } from 'ngx-bootstrap/modal';
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
import { ViewCreditComponent } from './view-credit/view-credit.component';
import { SharedComponent } from './shared/shared.component';
import { Modal, VexModalModule } from 'ngx-modialog/plugins/vex';

import { OverlayRenderer, DOMOverlayRenderer, Overlay } from 'ngx-modialog';
const MODAL_PROVIDERS = [
  Modal,
  Overlay,
  { provide: OverlayRenderer, useClass: DOMOverlayRenderer }
];
@NgModule({
  imports: [
    AppRoutingModule,
    ChartsModule,
    BsDropdownModule,
    CommonModule,
    CollapseModule,
    FormsModule,
    ModalModule.forRoot(),
    AccordionModule.forRoot(),
    VexModalModule,
  ], providers: [
    ...
    MODAL_PROVIDERS
  ],declarations: [ ViewAppComponent, HistoryCreditComponent, ViewCreditComponent, SharedComponent, PayDetailModalComponent ],
  entryComponents: [PayDetailModalComponent],
})
export class CreditsModule { }
