import { Component } from '@angular/core';
import { SweetAlertService } from 'ng2-sweetalert2';


@Component({
  templateUrl: 'view.component.html',
  providers: [SweetAlertService]
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
  ModalNuevoSolicitud = {
    Clients: [],
    selectClient: '',
    amountrequest: '',
    applicationdate: '',
    place: '',
    creditterm: '',
    projectname: '',
    idclient: '',
    status: 'Pendiente',
    avales: [],
    aval: {
      idapplication: '',
      selectClient_aval: {
        id : 1
      },
      idguarantee: -1,
      typeguarantee: 'Fisica',
      statusmarital: [{id: 1, name: 'Mancomunado'}, {id: 2, name: 'Bienes separados'}],
      name: '',
      lastname: '',
      rfc: '',
      curp: '',
      birthday: '',
      country: '',
      nacionality: '',
      email: '',
      fiel: '',
      address: '',
      phone: '',
      maritalstatus: '',
      regimen: {
        name: 'reg'
      },
      relationship: '',
      companyjob: '',
      phonejob: '',
      occupation: '',
      oldwork: ''
    }
  }


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

  static get parameters() {
    return [[SweetAlertService]];
  }
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
  deleteFiles($index): void {
    this.filesApp.splice($index, 1);
  }
  AddFile($files): void {
    let i, flag = false;
    if ($files === null) {
      flag = true;
    } else {
      for (i = 0; i < this.filesApp.length; i++) {
        if (this.filesApp[i] === $files) {
          flag = true;
          this.swalService.swal('Aviso', 'Archivo repetido', 'error');
        }
      }
    }

    if (flag === false) {
      this.filesApp.push($files);
    }
  }
  public showNameAval(aval, type): boolean {
    return aval.typeguarantee === type;
  }
  public DeleteAval(index): void {
    this.ModalNuevoSolicitud.avales.splice(index, 1);
  }

  // Add Aval
 public addAval(): void {
    let clear = false;
    if (this.ModalNuevoSolicitud.aval.typeguarantee === 'Fisica') {
      if (this.validPersonaFisica_add() === true) {
        this.ModalNuevoSolicitud.aval.regimen.name = this.ModalNuevoSolicitud.aval.regimen.name;
        const data = this.ModalNuevoSolicitud.aval;
        data.idguarantee = null;
        this.ModalNuevoSolicitud.avales.push(data);
        clear = true;
      } else {
        this.swalService.swal('Error', 'Completa los campos correctamente.', 'error');
      }
    }
    if (this.ModalNuevoSolicitud.aval.typeguarantee === 'Moral') {
      if (this.ModalNuevoSolicitud.aval.selectClient_aval) {
        this.ModalNuevoSolicitud.aval.idguarantee = this.ModalNuevoSolicitud.aval.selectClient_aval.id;
        // se copiaba usando angular copy vvvvvvvvvvv
        const data = this.ModalNuevoSolicitud.aval;
        this.ModalNuevoSolicitud.avales.push(data);
        clear = true;
      } else {
        this.swalService.swal('Error', 'Selecciona aval del listado, en caso de no existir agreguelo como cliente.', 'error');
      }
    }
    if (this.ModalNuevoSolicitud.aval.typeguarantee === '' || this.ModalNuevoSolicitud.aval.typeguarantee === null) {
      this.swalService.swal('Error', 'Selecciona un tipo de aval.', 'error');
    }
    if (clear === true) {
      this.clearAval();
    }
  }
  public clearAval(): void {
    this.ModalNuevoSolicitud.aval.idapplication = '';
    this.ModalNuevoSolicitud.aval.selectClient_aval.id = -1;
    this.ModalNuevoSolicitud.aval.idguarantee = -1;
    this.ModalNuevoSolicitud.aval.typeguarantee = null;
    this.ModalNuevoSolicitud.aval.statusmarital = [{id: 1, name: 'Mancomunado'}, {
      id: 2,
      name: 'Bienes separados'
    }];
    this.ModalNuevoSolicitud.aval.name = '';
    this.ModalNuevoSolicitud.aval.lastname = '';
    this.ModalNuevoSolicitud.aval.rfc = '';
    this.ModalNuevoSolicitud.aval.curp = '';
    this.ModalNuevoSolicitud.aval.birthday = '';
    this.ModalNuevoSolicitud.aval.country = '';
    this.ModalNuevoSolicitud.aval.nacionality = '';
    this.ModalNuevoSolicitud.aval.email = '';
    this.ModalNuevoSolicitud.aval.fiel = '';
    this.ModalNuevoSolicitud.aval.address = '';
    this.ModalNuevoSolicitud.aval.phone = '';
    this.ModalNuevoSolicitud.aval.maritalstatus = '';
    this.ModalNuevoSolicitud.aval.regimen.name = '';
    this.ModalNuevoSolicitud.aval.relationship = '';
    this.ModalNuevoSolicitud.aval.companyjob = '';
    this.ModalNuevoSolicitud.aval.phonejob = '';
    this.ModalNuevoSolicitud.aval.occupation = '';
    this.ModalNuevoSolicitud.aval.oldwork = '';
  }

  // Validaciones
  public validPersonaFisica_add(): boolean {
    const obj = this.ModalNuevoSolicitud.aval;
    return ((obj.name !== '') && (obj.lastname !== '') && (obj.rfc !== '') && (obj.curp !== '') && (obj.birthday !== '')
    && (obj.country !== '') && (obj.nacionality !== '') && (obj.email !== '') && (obj.address !== '') &&
    (obj.phone !== '') && (obj.maritalstatus !== '') && (obj.regimen !== null) && (obj.relationship !== '') &&
    (obj.companyjob !== '') && (obj.phonejob !== '') && (obj.occupation !== '') && (obj.oldwork !== ''));
  }

  // Init Values
  allClientes(): void {
      /*
      ClientsFact.allClients(function (clientes) {
        this.ModalNuevoSolicitud.Clients = clientes;
        //this.ModalNuevoCliente.banks = bancos.banks;
        //this.modalpuesto.bancos = bancos.banks;
      });
    */
  }
  public allSolicitudes(): void {
      /*
    ApplicationsFact.allApplication(function (solicitudes) {
      if (Array.isArray(solicitudes)) {
        this.applications = solicitudes;
        setTimeout(function () {
          $(function () {
            $('[data-toggle="tooltip"]').tooltip()
          })
        }, 500);
      } else {
        this.applications = null;
      }
    });
    */
  }
  // Show Application
  public showApplication(id): void {
      /*
    ApplicationsFact.showApplication(id).then(function (response) {
      if (response.data.error) {
        this.swalService.swal("Error", response.data.message, "error");
      } else {
        response.data.application.applicationdate =
        new Date(parseInt(response.data.application.applicationdate.split('-')[0]),
         parseInt(response.data.application.applicationdate.split('-')[1]) - 1,
         parseInt(response.data.application.applicationdate.split('-')[2]));
        this.ModalUpdateSolicitud.application = response.data.application;
        this.ModalUpdateSolicitud.creditaids = response.data.creditaids;
        this.ModalUpdateSolicitud.files = response.data.files;
        let result = $filter('filter')(this.ModalNuevoSolicitud.Clients, {id: response.data.application.idclient})[0];
        this.ModalUpdateSolicitud.application.client = result.businessname;
        this.onClickTab(this.tabs[0]);
      }
    }, function (error) {
      this.swalService.swal("Error", "No se pudo conectar con el servidor.", "error");
    });*/
  }

  // Download files
  public DownloadFile(id): void {
    // ApplicationsFact.DownloadFile(id);
  }

  // Add Application~solicitud

  public AddSolicitud(): void {

  /*
    this.ModalNuevoSolicitud.idclient = this.ModalNuevoSolicitud.selectClient.id;
    ApplicationsFact.addApplication(this.ModalNuevoSolicitud).then(
        function (response) {
          if (response.data.error) {
            this.swalService.swal("Error", response.data.message, "error");
          } else {
            let idapp = response.data.id;
            let boolerror = true;
            angular.forEach(this.filesApp, function (item, index) {
              ApplicationsFact.AddFile(item, idapp).then(function (response) {
                if (response.data.error === true) {
                  boolerror = false;
                  this.swalService.swal("Error", response.data.message, "error");
                }
              }, function (error) {
                boolerror = false;
                this.swalService.swal("Error", "No se pudo conectar con el servidor.", "error");
              });
            });
            if (boolerror) {
              angular.forEach(this.ModalNuevoSolicitud.avales, function (item, index) {
                item.idapplication = idapp;
                ApplicationsFact.addCreditAid(item).then(
                    function (response) {
                      if (response.data.error) {
                        boolerror = false;
                        this.swalService.swal("Error", response.data.message, "error");
                      }
                    },
                    function (error) {
                      boolerror = false;
                      this.swalService.swal("Error", "No se pudo conectar con el servidor.", "error");
                    });
              });
            }
            if (boolerror) {
              this.allSolicitudes();
              this.swalService.swal("Mensaje", "Guardado correctamente", "success");
            }
          }
        },
        function (error) {
          this.swalService.swal("Error", "No se pudo conectar con el servidor.", "error");
        });

  }
    this.autorizarSolicitud = function () {
    this.ModalUpdateSolicitud.application.status = 'Pre-Autorización'
  */
  }
  public CalcularCredito(type): void {
    console.log(type)
    switch (type) {
      case 1: {
        this.TablaAmortizacion_up = []
        let aux;
        for (let i = 0; i < parseInt(this.month_up, 10); i++) {
          if (i === 0) {
            aux = {
              capital_balance: this.capital_balance_up,
              interest: this.capital_balance_up * ((parseFloat(this.interest_up) / 100) / 12),
              interest_arrear: this.interest_arrear_up,
              iva: (this.capital_balance_up * ((parseFloat(this.interest_up) / 100) / 12)) * (parseFloat(this.iva_up) / 100),
              month: i + 1,
              days: this.days_up,
              date_app: new Date(this.date_app_up),
              sel_currency: this.sel_currency_up,
              interest_balance: this.capital_balance_up * ((parseFloat(this.interest_up) / 100) / 12),
              iva_balance: (this.capital_balance_up * ((parseFloat(this.interest_up) / 100) / 12)) * (parseFloat(this.iva_up) / 100),
              total: (this.capital_balance_up * ((parseFloat(this.interest_up) / 100) / 12)) + ((this.capital_balance_up
              * ((parseFloat(this.interest_up) / 100) / 12)) * (parseFloat(this.iva_up) / 100))
            }
            // aux se pasaba por copia usando angular copy vvvvvvvvvvvv
            this.TablaAmortizacion_up.push(aux);
          } else {
            const dateAux = aux.date_app
            aux.month = i + 1
            aux.date_app.setMonth(dateAux.getMonth() + 1)
            aux.interest_balance = aux.interest_balance + this.capital_balance_up * ((parseFloat(this.interest_up) / 100) / 12)
            aux.iva_balance = aux.iva_balance + (this.capital_balance_up * ((parseFloat(this.interest_up) / 100) / 12))
                * (parseFloat(this.iva_up) / 100)
            aux.total = aux.interest + aux.iva
            // aux se pasaba por copia usando angular copy vvvvvvvvvvvv
            this.TablaAmortizacion_up.push(aux);
          }
        }
        break;
      }
    }
  }
  public AutorizarCredito(): void {
      /*
      console.log(this.sel_type_up)
      let json = {
        application: this.ModalUpdateSolicitud.application.id,
        type: parseInt(this.sel_type_up),
        amount: parseFloat(this.capital_balance_up),
        start_date: this.date_app_up,
        term: parseInt(this.month_up),
        interest: parseFloat(this.interest_up),
        iva: parseFloat(this.iva_up),
        interest_arrear: parseFloat(this.interest_arrear_up),
        grace_days: parseInt(this.days_up),
        currency: this.sel_currency_up,
        todo: this.todo_up,
        extends: null,
        status: 'ACTIVO'
      }
      ApplicationsFact.addCreditApproved(json).then(function (response) {
        if (response.error === true) {
          this.swalService.swal("Error", response.message, "error");
        } else {
          this.swalService.swal("Guardado", "Credito guardado.", "success");
          this.allSolicitudes();
        }
      }, function (error) {
        this.swalService.swal("Error", "No se pudo conectar con el servidor.", "error");
      })*/
  }

  constructor(swal) {
    this.swalService = swal;
  }


/*
  constructor() { }

  public brandPrimary = '#20a8d8';
  public brandSuccess = '#4dbd74';
  public brandInfo = '#63c2de';
  public brandWarning = '#f8cb00';
  public brandDanger = '#f86c6b';

  // dropdown buttons
  public status: { isopen } = { isopen: false };
  public toggleDropdown($event: MouseEvent): void {
    $event.preventDefault();
    $event.stopPropagation();
    this.status.isopen = !this.status.isopen;
  }

  // convert Hex to RGBA
  // public convertHex(hex: string, opacity: number){
  //   hex = hex.replace('#','');
  //   let r = parseInt(hex.substring(0,2), 16);
  //   let g = parseInt(hex.substring(2,4), 16);
  //   let b = parseInt(hex.substring(4,6), 16);
  //
  //   let rgba = 'rgba('+r+','+g+','+b+','+opacity/100+')';
  //   return rgba;
  // }

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  // lineChart1
  public lineChart1Data: Array<any> = [
    {
      data: [65, 59, 84, 84, 51, 55, 40],
      label: 'Series A'
    }
  ];
  public lineChart1Labels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChart1Options: any = {
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        gridLines: {
          color: 'transparent',
          zeroLineColor: 'transparent'
        },
        ticks: {
          fontSize: 2,
          fontColor: 'transparent',
        }

      }],
      yAxes: [{
        display: false,
        ticks: {
          display: false,
          min: 40 - 5,
          max: 84 + 5,
        }
      }],
    },
    elements: {
      line: {
        borderWidth: 1
      },
      point: {
        radius: 4,
        hitRadius: 10,
        hoverRadius: 4,
      },
    },
    legend: {
      display: false
    }
  };
  public lineChart1Colours: Array<any> = [
    { // grey
      backgroundColor: this.brandPrimary,
      borderColor: 'rgba(255,255,255,.55)'
    }
  ];
  public lineChart1Legend = false;
  public lineChart1Type = 'line';

  // lineChart2
  public lineChart2Data: Array<any> = [
    {
      data: [1, 18, 9, 17, 34, 22, 11],
      label: 'Series A'
    }
  ];
  public lineChart2Labels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChart2Options: any = {
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        gridLines: {
          color: 'transparent',
          zeroLineColor: 'transparent'
        },
        ticks: {
          fontSize: 2,
          fontColor: 'transparent',
        }

      }],
      yAxes: [{
        display: false,
        ticks: {
          display: false,
          min: 1 - 5,
          max: 34 + 5,
        }
      }],
    },
    elements: {
      line: {
        tension: 0.00001,
        borderWidth: 1
      },
      point: {
        radius: 4,
        hitRadius: 10,
        hoverRadius: 4,
      },
    },
    legend: {
      display: false
    }
  };
  public lineChart2Colours: Array<any> = [
    { // grey
      backgroundColor: this.brandInfo,
      borderColor: 'rgba(255,255,255,.55)'
    }
  ];
  public lineChart2Legend = false;
  public lineChart2Type = 'line';


  // lineChart3
  public lineChart3Data: Array<any> = [
    {
      data: [78, 81, 80, 45, 34, 12, 40],
      label: 'Series A'
    }
  ];
  public lineChart3Labels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChart3Options: any = {
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display: false
      }],
      yAxes: [{
        display: false
      }]
    },
    elements: {
      line: {
        borderWidth: 2
      },
      point: {
        radius: 0,
        hitRadius: 10,
        hoverRadius: 4,
      },
    },
    legend: {
      display: false
    }
  };
  public lineChart3Colours: Array<any> = [
    {
      backgroundColor: 'rgba(255,255,255,.2)',
      borderColor: 'rgba(255,255,255,.55)',
    }
  ];
  public lineChart3Legend = false;
  public lineChart3Type = 'line';


  // barChart1
  public barChart1Data: Array<any> = [
    {
      data: [78, 81, 80, 45, 34, 12, 40, 78, 81, 80, 45, 34, 12, 40, 12, 40],
      label: 'Series A'
    }
  ];
  public barChart1Labels: Array<any> = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16'];
  public barChart1Options: any = {
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display: false,
        barPercentage: 0.6,
      }],
      yAxes: [{
        display: false
      }]
    },
    legend: {
      display: false
    }
  };
  public barChart1Colours: Array<any> = [
    {
      backgroundColor: 'rgba(255,255,255,.3)',
      borderWidth: 0
    }
  ];
  public barChart1Legend = false;
  public barChart1Type = 'bar';

  // lineChart4
  public lineChart4Data: Array<any> = [
    {
      data: [4, 18, 9, 17, 34, 22, 11, 3, 15, 12, 18, 9],
      label: 'Series A'
    }
  ];
  public lineChart4Labels: Array<any> = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  public lineChart4Options: any = {
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display: false,
        points: false,
      }],
      yAxes: [{
        display: false,
      }]
    },
    elements: { point: { radius: 0 } },
    legend: {
      display: false
    }
  };
  public lineChart4Colours: Array<any> = [
    {
      backgroundColor: 'transparent',
      borderColor: 'rgba(255,255,255,.55)',
      borderWidth: 2
    }
  ];
  public lineChart4Legend = false;
  public lineChart4Type = 'line';


  // barChart2
  public barChart2Data: Array<any> = [
    {
      data: [4, 18, 9, 17, 34, 22, 11, 3, 15, 12, 18, 9],
      label: 'Series A'
    }
  ];
  public barChart2Labels: Array<any> = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  public barChart2Options: any = {
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display: false,
        barPercentage: 0.6,
      }],
      yAxes: [{
        display: false,
        ticks: {
          beginAtZero: true,
        }
      }]
    },
    legend: {
      display: false
    }
  };
  public barChart2Colours: Array<any> = [
    {
      backgroundColor: 'rgba(0,0,0,.2)',
      borderWidth: 0
    }
  ];
  public barChart2Legend = false;
  public barChart2Type = 'bar';


  // barChart3
  public barChart3Data: Array<any> = [
    {
      data: [4, 18, 9, 17, 34, 22, 11, 3, 15, 12, 18, 9],
      label: 'Series A'
    }
  ];
  public barChart3Labels: Array<any> = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  public barChart3Options: any = {
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display: false
      }],
      yAxes: [{
        display: false
      }]
    },
    legend: {
      display: false
    }
  };
  public barChart3Primary: Array<any> = [
    {
      backgroundColor: this.brandPrimary,
      borderColor: 'transparent',
      borderWidth: 1
    }
  ];
  public barChart3Danger: Array<any> = [
    {
      backgroundColor: this.brandDanger,
      borderColor: 'transparent',
      borderWidth: 1
    }
  ];
  public barChart3Success: Array<any> = [
    {
      backgroundColor: this.brandSuccess,
      borderColor: 'transparent',
      borderWidth: 1
    }
  ];
  public barChart3Legend = false;
  public barChart3Type = 'bar';


  // lineChart5
  public lineChart5Data: Array<any> = [
    {
      data: [65, 59, 84, 84, 51, 55, 40],
      label: 'Series A'
    }
  ];
  public lineChart5Labels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChart5Options: any = {
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display: false,
        points: false,
      }],
      yAxes: [{
        display: false,
      }]
    },
    elements: { point: { radius: 0 } },
    legend: {
      display: false
    }
  };
  public lineChart5Info: Array<any> = [
    {
      backgroundColor: 'transparent',
      borderColor: this.brandInfo,
      borderWidth: 2
    }
  ];
  public lineChart5Success: Array<any> = [
    {
      backgroundColor: 'transparent',
      borderColor: this.brandInfo,
      borderWidth: 2
    }
  ];
  public lineChart5Warning: Array<any> = [
    {
      backgroundColor: 'transparent',
      borderColor: this.brandWarning,
      borderWidth: 2
    }
  ];
  public lineChart5Legend = false;
  public lineChart5Type = 'line';
*/
}
