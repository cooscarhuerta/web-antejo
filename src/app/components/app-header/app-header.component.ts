import { SweetAlertService } from 'ng2-sweetalert2';
import { LoginComponent } from './../../views/pages/login/login.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss'],
  providers: [LoginComponent]
})
export class AppHeader implements OnInit {
  username: string;
  ngOnInit(): void {
    this.username = localStorage.getItem('email');
     }

  public logOut(): void {
    localStorage.clear();
    window.location.reload();
  }
}
