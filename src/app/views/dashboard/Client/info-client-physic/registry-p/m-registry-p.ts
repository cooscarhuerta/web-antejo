import { FilesP } from './../files-p/m-files-p';
import { Bank } from '../../bank/bank';

export class RegistryP {

  constructor(
    public client = {
      name: '',
      lastname: '',
      employeenumber: null,
      rfc: '',
      fiel: null,
      email: '',
      businesscategory: '',
      constitutiondate: null,
      type: 'Fisica',
      address: '',
      colony: '',
      postalcode: '',
      city: '',
      state: '',
      phone: null,
      userId: null
    },
    public banks: [Bank] = [new Bank],
    public selectBank: string = '',
    public files: [FilesP] = [new FilesP]

  ) { }
}
