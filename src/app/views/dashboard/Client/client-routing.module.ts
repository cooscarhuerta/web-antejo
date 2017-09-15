import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditClientComponent } from './edit-client/edit-client.component';
import { ClientComponent } from './client.component';

const routes: Routes = [
  {
    path: 'view',
    component: ClientComponent,
    data: {
      title: 'Cliente'
    }
  }, {
    path: 'update',
    component: EditClientComponent,
    data: {
      title: 'EditClient'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
