import { SweetAlertService } from 'ng2-sweetalert2';
import { LoginComponent } from './../../views/pages/login/login.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  providers: [LoginComponent]
})
export class AppHeader {

  OnInit(): void {}

  public logOut(): void {
    localStorage.clear();
    window.location.reload();
  }
}
