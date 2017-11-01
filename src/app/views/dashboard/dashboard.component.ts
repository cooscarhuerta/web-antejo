import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable, Input } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { SweetAlertService } from 'ng2-sweetalert2';
@Component({
  templateUrl: 'dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

@Injectable()
export class DashboardComponent implements OnInit {
  public dataFinishedLoading = false;
  public creditArray;
  public soliArray;
  @Input()
  public applications;
  @Input()
  public credits;
  @Input()
  public client;
  constructor(private http: HttpClient, private router: Router, private sweetAlert: SweetAlertService) { }

  ngOnInit(): void {
    this.http.get('/Clients/Clientes/show/' + localStorage.getItem('idClient') + '/Wallet').subscribe(response => {
     console.log('Clientes', response);
      this.creditArray = response['credits'];
      this.soliArray = response['applications'];
      if (response['credits'] || response['applications']) {
        this.dataFinishedLoading = true;
      } else {
        this.dataFinishedLoading = false;
      }
    });
  }
}
