import { SectionCreditsComponent } from './../section-credits/section-credits.component';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-history-credit',
  templateUrl: './history-credit.component.html',
  styleUrls: ['../section-credits/section-credits.component.scss']
})
export class HistoryCreditComponent implements OnInit {
  public Creditos: Array<any>;

  ngOnInit(): void {
     this.Creditos = [{id: '1'}, {id: '2'}, {id: '3'}];
  }


}
