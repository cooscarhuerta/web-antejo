import { RestPasswordComponent } from './rest-password/rest-password.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientComponent } from './client.component';

const routes: Routes = [
  {
    path: 'view',
    component: ClientComponent,
    data: {
      title: 'Cliente'
    },
  },
  {
    path: 'reset',
    component: RestPasswordComponent,
    data: {
      title: 'Cambiar Contraseña'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
