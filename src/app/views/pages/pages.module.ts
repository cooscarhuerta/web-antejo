import { NgModule } from '@angular/core';

import { P404Component } from './404/404.component';
import { P500Component } from './500/500.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { PagesRoutingModule } from './pages-routing.module';
import {FormsModule} from '@angular/forms';
import { RegistryUserComponent } from './login/registry-user/registry-user.component';

@NgModule({
  imports: [ PagesRoutingModule, FormsModule ],
  declarations: [
    P404Component,
    P500Component,
    LoginComponent,
    RegisterComponent,
    RegistryUserComponent
  ],
providers: [

]
})
export class PagesModule { }
