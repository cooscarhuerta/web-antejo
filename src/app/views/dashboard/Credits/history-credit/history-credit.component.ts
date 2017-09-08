import { document } from 'ngx-bootstrap/utils/facade/browser';
import { SectionCreditsComponent } from './../section-credits/section-credits.component';
import { Component, OnInit, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-history-credit',
  templateUrl: './history-credit.component.html'
})
export class HistoryCreditComponent implements OnInit {
  strArray = ['1', '2', '3'];
  ngOnInit(): void {
  }

}
