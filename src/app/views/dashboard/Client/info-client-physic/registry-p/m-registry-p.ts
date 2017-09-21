import { FilesP } from './../files-p/m-files-p';
import { BankP } from './../bank-p/m-bank-p';

export class RegistryP {

  constructor(
    public name: string = '',
    public lastname: string = '',
    public employeenumber: number = null,
    public rfc: string = '',
    public fiel: number = null,
    public email: string = '',
    public businesscategory: string = '',
    public constitutiondate: Date = null,
    public address: string = '',
    public colony: string = '',
    public postalcode: string = '',
    public city: string = '',
    public state: string = '',
    public phone: number = null,
    public banks: [BankP] = [new BankP],
    public selectBank: string = '',
    public files: [FilesP] = [new FilesP]

  ) { }
}
