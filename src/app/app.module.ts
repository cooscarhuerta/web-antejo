import { LoginComponent } from './views/pages/login/login.component';
import { ServiceBank } from './views/dashboard/Client/shared/services.client/service.bancos';
import { SweetAlertService } from 'ng2-sweetalert2';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PostRegistryP } from './views/dashboard/Client/shared/services.client/service.registryP';
import { PostRegistryM } from './views/dashboard/Client/shared/services.client/service.registryM';
import { AuthGuard } from './views/pages/login/auth-guard.service';
import { LoginInterceptor } from './views/pages/login/login.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { Http, HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // <-- NgModel lives here
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';

// import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// Import containers
import {
  FullLayout,
  SimpleLayout
} from './containers';

const APP_CONTAINERS = [
  FullLayout,
  SimpleLayout
]

// Import components
import {
  AppAside,
  AppBreadcrumbs,
  AppFooter,
  AppHeader,
  AppSidebar
} from './components';

const APP_COMPONENTS = [
  AppAside,
  AppBreadcrumbs,
  AppFooter,
  AppHeader,
  AppSidebar // ,
  // BrowserAnimationsModule,
]

// Import directives
import {
  AsideToggleDirective,
  NAV_DROPDOWN_DIRECTIVES,
  SIDEBAR_TOGGLE_DIRECTIVES
} from './directives';

const APP_DIRECTIVES = [
  AsideToggleDirective,
  NAV_DROPDOWN_DIRECTIVES,
  SIDEBAR_TOGGLE_DIRECTIVES
]

// Import routing module
import { AppRoutingModule } from './app.routing';

// Import 3rd party components
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BsDatepickerModule.forRoot(),

  ],
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
    ...APP_COMPONENTS,
    ...APP_DIRECTIVES,
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }, AuthGuard, PostRegistryM, SweetAlertService, PostRegistryP, ServiceBank,
  {
  provide: HTTP_INTERCEPTORS,
  useClass: LoginInterceptor,
  multi: true
}],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
