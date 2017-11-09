import { File } from './../../shared/files/file';
import { Bank } from '../../shared/bank/bank';

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
      constitutiondate: new Date(),
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
    public files: [File] = [new File]

  ) { }
}
