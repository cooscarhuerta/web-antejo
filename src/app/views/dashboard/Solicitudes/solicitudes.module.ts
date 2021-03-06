import { DatepickerModule } from 'angular2-material-datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 import { RegistryAppComponent } from './crear-solicitudes/application-data/registry-app/registry-app.component';
import { QueryService } from './shared/query.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './solicitudes-routing.module';
import { ViewAppComponent } from './view.component';
import { CrearSolicitudesComponent } from './crear-solicitudes/crear-solicitudes.component';
import { ApplicationDataComponent } from './crear-solicitudes/application-data/application-data.component';
import { AvalComponent } from './crear-solicitudes/application-data/aval/aval.component';
import { VerSolicitudesComponent } from './ver-solicitudes/ver-solicitudes.component';
import { FilesComponent } from './shared/files/files.component';
import { AccordionModule } from 'ngx-bootstrap';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AddFileComponent } from './shared/addfile/addfile.component';
import { MomentModule } from 'angular2-moment';
@NgModule({
  exports: [
    VerSolicitudesComponent,
    ViewAppComponent,
    AddFileComponent,
  ],
  providers: [QueryService],
  imports: [
    AppRoutingModule,
    ChartsModule,
    BsDropdownModule,
    CommonModule,
    DatepickerModule,
    MomentModule,
    TabsModule,
    AccordionModule.forRoot(),
    FormsModule
  ],
  declarations: [ ViewAppComponent, CrearSolicitudesComponent, ApplicationDataComponent,
                    AvalComponent, VerSolicitudesComponent,
                   RegistryAppComponent, AddFileComponent, FilesComponent]
})
export class ApplicationModule { }
