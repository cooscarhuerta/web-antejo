import { AuthGuard } from './auth-guard.service';

import { Component } from '@angular/core';

import { SweetAlertService } from 'ng2-sweetalert2';

@Component({
  templateUrl: 'login.component.html',
    providers: [SweetAlertService]
})

export class LoginComponent {
    public loggingIn = [false];
    constructor(private authguard: AuthGuard, private sweetAlert: SweetAlertService) {
   }
   logIn(event, email, password) {
        try {
            this.loggingIn[0] = true;
            this.authguard.logIn(event, email, password, this.loggingIn, this.sweetAlert);
        }catch (Exp) {
            console.log(Exp)
        }

   }

}
