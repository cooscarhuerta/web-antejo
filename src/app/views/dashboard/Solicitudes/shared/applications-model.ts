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
    amountrequest = null;
    applicationdate = null;
    place = '';
    creditterm = null;
    projectname = '';
    status = 'Pendiente';
}

export class Aval {
    id = null;
    idapplication = null;
    name = null;
    lastname = null;
    businessname = null;
    business_name = null;
    rfc = null;
    curp = null;
    birthday = null;
    country = null;
    nacionality = null;
    email = null;
    fiel = null;
    address = null;
    phone_number = null;
    maritalstatus = null;
    regimen = null;
    relationship = null;
    companyjob = null;
    phonejob = null;
    occupation = null;
    oldwork = null;
    join_date = null;
    typeguarantee = null;
    idfile = null;
}