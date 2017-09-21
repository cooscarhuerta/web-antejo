import {BanksP} from './BanksP'

export class BankP {
  constructor(
        public banco: [BanksP] = [new BanksP],
        public accountnumber: string = '',
        public accounttype: string = '',
        public clabe: string = '',
        public idclient:  string = ''
  ) { }
}
