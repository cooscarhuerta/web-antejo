export class ApplicationsModel {
    applications = new App()
    avals: Aval[] = [new Aval()]
    files: File[] = [new File()]
}


export class File {
    comprobante: '';
    estadoCuenta: '';
    RFC: '';
    contrato: '';
}

export class App {
    idclient = localStorage.getItem('idClient');
    amountrequest = 0;
    applicationdate = Date.now();
    place = '';
    creditterm = 0;
    projectname = '';
    status = 'Pendiente';
}

export class Aval {
    name = '';
    lastname = '';
    RFC = '';
    CURP = '';
    birthdate = Date.now();
    country = '';
    nationality = '';
    email = '';
    fiel = '';
    address = '';
    phone_number = '';
    marital_status = '';
    marital_regimen = '';
    relationship = '';
    workplace = '';
    work_phone = '';
    position = '';
    join_date = Date.now()
}
