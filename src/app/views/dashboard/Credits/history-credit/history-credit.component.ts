import { Component, OnInit, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { SweetAlertService } from 'ng2-sweetalert2';
@Component({
  selector: 'app-history-credit',
  providers: [SweetAlertService],
  styleUrls: ['./history-credit.component.scss'],
  templateUrl: './history-credit.component.html'
})
export class HistoryCreditComponent implements OnInit {
  creditsArray = [1, 2, 3];
  credits = {};
  dataFinishedLoading = false;
  constructor(private http: HttpClient, private sweetAlert: SweetAlertService) {

  }
  ngOnInit(): void {
    this.http.get(
      '/Clients/Creditos/show/' + 1 + 'Cliente',
      {
        headers: new HttpHeaders()
          .set('Content-type', 'application/json')
          .set('token', localStorage.getItem('auth_token'))
      }).subscribe(data => {
        // Read the result field from the JSON response.
        if (data['error'] === true) {
          this.sweetAlert.swal('Aviso', 'No tiene creditos registrados.', 'warning');


        } else {

          this.creditsArray = data['credits'];
          for (let i = 0, len = this.creditsArray.length; i < len; i++) {
            const startDate = new Date(Date.parse(this.creditsArray[i]['start_date']));
            let endDate = new Date(startDate.getTime());

            endDate.setMonth(endDate.getMonth() + this.creditsArray[i]['term']);
            this.creditsArray[i]['startdate'] = startDate.toLocaleDateString();
            this.creditsArray[i]['enddate'] = endDate.toLocaleDateString();
          }

        }
        this.dataFinishedLoading = true;

      });
  }

}
