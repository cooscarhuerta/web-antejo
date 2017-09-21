import { AuthGuard } from './auth-guard.service';

import { Component } from '@angular/core';


@Component({
  templateUrl: 'login.component.html'
})

export class LoginComponent {

    constructor(private authguard: AuthGuard) {

   }

   logIn(event, email, password) {
     this.authguard.logIn(event, email, password);
   }

}
