import { App } from './../../../shared/applications-model';
import { HttpClient } from '@angular/common/http';
import { SolicitudM } from './m-registry-m';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-registry-sol-m',
  templateUrl: './registry-sol-m.component.html',
  styleUrls: ['./registry-sol-m.component.scss']
})
export class RegistrySolMComponent implements OnInit {

  submitted = false;
  @Input()
  inputAppData: App;
  @Output()
  appDataRefresher: EventEmitter<App>;
  model: App = new App();
  constructor(private http: HttpClient) {
    this.appDataRefresher = new EventEmitter<App>();
  }

  ngOnInit() {
    this.model = this.inputAppData;

  }

  onSubmit() {
    this.submitted = true;
    console.log(this.model);
    this.http.post('/Clients/Solicitudes/add', this.model).subscribe((response) => {
      console.log(response);
      if (response['error']) {
        console.log('add application query failed');
      }else {
        localStorage.setItem('appId', response['app']['id']);
        console.log('success');
        this.appDataRefresher.emit(this.model);
      }
      
    });
  }
}
