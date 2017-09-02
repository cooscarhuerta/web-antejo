import { Component } from '@angular/core';


@Component({
  selector: 'solicitud-component',
  templateUrl: 'view.component.html',
})


export class ViewAppComponent {

  menu = 'show'; // 'show', 'create', 'view'
  tabs = [
    {
      title: 'Informacion Basica',
      url: 'solicitud.tpl.html'
    },
    {
      title: 'Archivos',
      url: 'archivos.tpl.html'
    },
    {
      title: 'Informacion de Aval',
      url: 'aval.tpl.html'
    },
    {
      title: 'Autorizar',
      url: 'autorizar.tpl.html'
    }
  ]
  currentTab = 'personalinfo.tpl.html';
  month_up = null;
  days_up = null;
  capital_balance_up = null;
  interest_up = null;
  interest_arrear_up = null;
  iva_up = null;
  sel_currency_up = null;
  date_app_up = null;
  TablaAmortizacion_up = [];
  filesApp = [];


   application = {
     status: 'Pendiente',
     businessname: 'Co.tecnologias',
     projectname: 'Antejo',
     amountrequest: '101010101010',
     applicationdate: '2017-01-01'
   };

  ModalUpdateSolicitud = {
    application: {
      id: null,
      idclient: null,
      client: null,
      amountrequest: null,
      applicationdate: null,
      place: null,
      creditterm: null,
      projectname: null,
      status: null,
      created_at: null,
      updated_at: null,
      deleted_at: null
    },
    creditaids: [],
    files: []
  }
  swalService = null;
  public onClickTab(tab): void {
    this.currentTab = tab.url;
  }
  public createApplication():  void {
    this.menu = 'create';
    this.onClickTab(this.tabs[0]);
  }
  public isActiveTab(tabUrl): boolean {
    return tabUrl === this.currentTab;
  }
}
