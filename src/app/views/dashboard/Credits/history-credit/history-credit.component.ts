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
  creditsArray = ['1', '2', '3'];
  credits = {};
  dataFinishedLoading = false

  constructor(private http: HttpClient) {

  }
  ngOnInit(): void {
    this.http.get(
      'http://localhost:8081/Clients/Creditos/show/'+1,
      {
        headers: new HttpHeaders()
        .set('Content-type', 'application/json')
        .set('token','QEbKd4UqLpazbnOeLU46YsmOXL1KAfMGHamDQqTxrnXgWZnaMQmCTbVyj5I7')
      }).subscribe(data => {
    // Read the result field from the JSON response.
    if (data['error'] === true) {
      console.log("Credits query didn't work");

    }else {
      console.log(data['credits']);
      this.creditsArray = data['credits'];
      console.log("Credits get!");
      this.dataFinishedLoading = true
    }
    console.log(data);
    });
  }

}
