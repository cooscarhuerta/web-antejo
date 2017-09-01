import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewAppComponent } from './view.component';

const routes: Routes = [
  {
    path: 'view',
    component: ViewAppComponent,
    data: {
      title: 'Solicitudes'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
