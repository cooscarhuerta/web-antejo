import { EditClientComponent } from './views/dashboard/Client/edit-client/edit-client.component';
import { ClientComponent } from './views/dashboard/Client/client.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import {
  FullLayout,
  SimpleLayout
} from './containers';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '',
    component: FullLayout,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: './views/dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'client',
        component: ClientComponent
      },
      {
        path: 'client/edit',
        component: EditClientComponent
      },
      {
        path: 'creditos',
        loadChildren: './views/dashboard/Credits/creditos.module#AppModule'
      },
      {
        path: 'solicitudes',
        loadChildren: './views/dashboard/Solicitudes/solicitudes.module#AppModule'
      },
      {
        path: 'charts',
        loadChildren: './views/chartjs/chartjs.module#ChartJSModule'
      }
    ]
  },
  {
    path: 'pages',
    component: SimpleLayout,
    data: {
      title: 'Pages'
    },
    children: [
      {
        path: '',
        loadChildren: './views/pages/pages.module#PagesModule',
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
