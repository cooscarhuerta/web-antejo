import { AuthService } from './shared/auth.service';
import { ExtendHttpService } from './shared/extend-http.service';
import { Http, HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // <-- NgModel lives here
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
// import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SweetAlertService} from 'ng2-sweetalert2';
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
import { ClientComponent } from './views/dashboard/Client/client.component';
import { EditClientComponent } from './views/dashboard/Client/edit-client/edit-client.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
    ...APP_COMPONENTS,
    ...APP_DIRECTIVES,
    ClientComponent,
    EditClientComponent
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }, { provide: Http, useClass: ExtendHttpService }],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
