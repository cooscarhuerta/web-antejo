import { FormsModule } from '@angular/forms';
import { RegistrySolPComponent } from './crear-solicitudes/physical-person/registry-sol-p/registry-sol-p.component';
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
import { FilesPComponent } from './crear-solicitudes/physical-person/files-p/files-p.component';
import { FilesMComponent } from './crear-solicitudes/moral-person/files-m/files-m.component';
import { RegistrySolMComponent } from './crear-solicitudes/moral-person/registry-sol-m/registry-sol-m.component';


@NgModule({
  exports: [
    VerSolicitudesComponent,
    ViewAppComponent
  ],
  imports: [
    AppRoutingModule,
    ChartsModule,
    BsDropdownModule,
    CommonModule,
    TabsModule,
    AccordionModule.forRoot(),
    FormsModule
  ],
  declarations: [ ViewAppComponent, CrearSolicitudesComponent, PhysicalPersonComponent,
                  MoralPersonComponent, AvalPComponent, AvalMComponent, VerSolicitudesComponent, 
                   SectionSolicitudesComponent, FilesPComponent, FilesMComponent,
                    RegistrySolPComponent, RegistrySolMComponent]
})
export class AppModule { }
