import { ManagerM } from './../managers-m/m-manager-m';
import { SharedholderM } from './../shared-holder-m/m-shared-holder-m';
import { File } from './../../shared/files/file';
import { Bank } from '../../shared/bank/bank';

export class RegistryM {
 constructor(
    public client = {
      businessname: '',
      employeenumber: null,
      rfc: '',
      fiel: null,
      email: '',
      businesscategory: '',
      constitutiondate: new Date(),
      type: 'Moral',
      address: '',
      colony: '',
      postalcode: '',
      city: '',
      state: '',
      phone: null,
    },
    public banks: [Bank] = [new Bank],
    public files: [File] = [new File],
    public sharedholder: [SharedholderM] = [new SharedholderM],
    public manager: [ManagerM] = [new ManagerM]

  ) { }
}
