import {BanksP} from './BanksP'

export class BankP {
  constructor(
        public idbank: number = null,
        public accountnumber: string = '',
        public accounttype: string = '',
        public clabe: string = '',
        public idclient:  string = ''
  ) { }
}
