import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './solicitudes-routing.module';


import { ViewAppComponent } from './view.component';
import { CrearSolicitudesComponent } from './crear-solicitudes/crear-solicitudes.component';
import { PhysicalPersonComponent } from './crear-solicitudes/physical-person/physical-person.component';
import { MoralPersonComponent } from './crear-solicitudes/moral-person/moral-person.component';
import { AvalPComponent } from './crear-solicitudes/physical-person/aval-p/aval-p.component';
import { AvalMComponent } from './crear-solicitudes/moral-person/aval-m/aval-m.component';
import { VerSolicitudesComponent } from './ver-solicitudes/ver-solicitudes.component';
import { SectionSolicitudesComponent } from './section-solicitudes/section-solicitudes.component';

import { AccordionModule } from 'ngx-bootstrap/ng2-bootstrap';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';


@NgModule({
  imports: [
    AppRoutingModule,
    ChartsModule,
    BsDropdownModule,
    CommonModule,
    TabsModule,
    AccordionModule.forRoot()
  ],
  declarations: [ ViewAppComponent, CrearSolicitudesComponent, PhysicalPersonComponent,
                  MoralPersonComponent, AvalPComponent, AvalMComponent, VerSolicitudesComponent, SectionSolicitudesComponent]
})
export class AppModule { }
