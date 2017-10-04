import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './app-sidebar.component.html'
})
export class AppSidebar implements OnInit {
  public idClient;
  ngOnInit(): void {
    this.idClient = localStorage.getItem('idClient');
  }
}
