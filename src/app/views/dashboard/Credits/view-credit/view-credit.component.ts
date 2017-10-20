import { SweetAlertService } from 'ng2-sweetalert2';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-credit',
  templateUrl: './view-credit.component.html',
  providers: [SweetAlertService],
  styleUrls: ['./view-credit.component.scss']
})

export class ViewCreditComponent implements OnInit {
  creditTypes = {
    'Pago al Final': 1,
    'Revolvente': 2
  }
  DateNow = new Date().toDateString();
  DateMin = null;
  credit = [];
  lastMove = null;
  dataFinishedLoading: boolean;
  project = 'Red Social Cazadores';
  moves = '';
  creditId = null;
  creditType;
  CreditPadre = {};
  modalpay = {
    pay: '',
    sel_moneda: '',
    currency: '',
    date: '',
    file: null
  }

  client = 'Jorge Arturo Carvajal Siller';
  constructor(private http: HttpClient, private route: ActivatedRoute, private sweetAlert: SweetAlertService) { }

  ngOnInit() {
    this.dataFinishedLoading = false;
    this.route.params.subscribe(params => {
      console.log(params.creditId);
      if (params.creditId) {
        this.creditId = params.creditId;
        this.http.get('/Clients/Creditos/show/' + this.creditId).subscribe(response => {
          if (!response['error']) {
            console.log(response);
            this.lastMove = response['lastMove'];
            this.credit = response['credits'];
            this.moves = response['moves'];
            this.client = response['client'];
            this.project = this.credit[0].todo;
            this.creditType = this.credit[0].type;
            if (this.creditType === this.creditTypes['Revolvente']) {
              this.CreditPadre = this.credit[0];
            } else { // Tipo pago al final
              this.CreditPadre = response['lastCondition'];
            }
          } else {
            this.sweetAlert.swal('Error', 'Error al cargar credito.', 'error');
          }
          this.dataFinishedLoading = true;
        })
      }
    });
  }
}
