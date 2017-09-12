import { AuthService } from './../../../shared/auth.service';


import { Headers, RequestOptions } from '@angular/http';
import { window } from 'rxjs/operator/window';
import { Component, Injectable,  OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {SweetAlertService} from 'ng2-sweetalert2';
import {NgForm} from '@angular/forms';


@Component({
  templateUrl: 'login.component.html',
  providers: [SweetAlertService, NgForm]
})
export class LoginComponent implements OnInit {
  results = null;

  constructor( private swalService: SweetAlertService, private authSvc: AuthService) {

  }
  ngOnInit(): void {

  }

  logIn(event, email, password): void {
    console.log(event, email, password)
    event.preventDefault();
    this.authSvc.logIn(email, password, isLoggedin => {
       if (isLoggedin) {
         this.swalService.swal('Correcto', 'Inisio desesion correcto', 'error');
         return
       }
        this.swalService.swal('Error', 'Hubo un error', 'error');
    })
    }
}
