import { AuthGuard } from './views/pages/login/auth-guard.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';

// Import Containers
import {
  FullLayout,
  SimpleLayout
} from './containers';

export const routes: Routes = [
  {
    path: '',
    component: FullLayout,
    canActivate: [AuthGuard],
    data: {
      title: 'Home',
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: './views/dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'cliente',
        loadChildren: './views/dashboard/Client/client.module#AppModule'
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
      },
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
