import { ViewCreditComponent } from './view-credit/view-credit.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewAppComponent } from './view.components';
import { HistoryCreditComponent } from 'app/views/dashboard/Credits/history-credit/history-credit.component';

const routes: Routes = [
  {
    path: 'view',
    component: ViewAppComponent,
    data: {
      title: 'Creditos'
    }

  },
  {
    path: 'historial/:creditId',
    component: ViewCreditComponent,
    data: {
      title: 'Ver Credito'
    }
  },
   {
      path : 'historial',
      component : HistoryCreditComponent,
      data: {
        title: 'Historial'
      }
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
