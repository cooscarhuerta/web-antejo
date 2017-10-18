import { ManagerM } from './../managers-m/m-manager-m';
import { SharedholderM } from './../shared-holder-m/m-shared-holder-m';
import { FilesM } from './../files-m/m-files-m';
import { Bank } from '../../bank/bank';

export class RegistryM {
 constructor(
    public client = {
      businessname: '',
      employeenumber: null,
      rfc: '',
      fiel: null,
      email: '',
      businesscategory: '',
      constitutiondate: null,
      type: 'Moral',
      address: '',
      colony: '',
      postalcode: '',
      city: '',
      state: '',
      phone: null,
    },
    public banks: [Bank] = [new Bank],
    public files: [FilesM] = [new FilesM],
    public sharedholder: [SharedholderM] = [new SharedholderM],
    public manager: [ManagerM] = [new ManagerM]

  ) { }
}
