import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable, Input } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { SweetAlertService } from 'ng2-sweetalert2';
@Component({
  templateUrl: 'dashboard.component.html'
})

@Injectable()
export class DashboardComponent implements OnInit {
  public dataFinishedLoading: boolean = false;
  @Input()
  public applications;
  @Input()
  public credits;
  @Input()
  public client;
  constructor(private http: HttpClient, private router: Router, private sweetAlert: SweetAlertService) { }

  ngOnInit(): void {}
}
