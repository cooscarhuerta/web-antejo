import { ManagerM } from './../managers-m/m-manager-m';
import { SharedholderM } from './../shared-holder-m/m-shared-holder-m';
import { FilesM } from './../files-m/m-files-m';
import { BankM } from './../bank-m/m-bank-m';

export class RegistryM {
 constructor(

    public name: string = '',
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
    public banks: [BankM] = [new BankM],
    public selectBank: string = '',
    public files: [FilesM] = [new FilesM],
    public sharedholder: [SharedholderM] = [new SharedholderM],
    public manager: [ManagerM] = [new ManagerM]

  ) { }
}
