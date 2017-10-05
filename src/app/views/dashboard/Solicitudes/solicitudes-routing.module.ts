import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewAppComponent } from './view.component';
import { CrearSolicitudesComponent } from 'app/views/dashboard/Solicitudes/crear-solicitudes/crear-solicitudes.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'view'
  },
  {
    path: 'view',
    component: ViewAppComponent,
    data: {
      title: 'Solicitudes'
    }
  }, {
    path: 'create',
    component: CrearSolicitudesComponent,
    data: {
      title: 'CrearSolicitudess'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
