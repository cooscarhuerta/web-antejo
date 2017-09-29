import {BanksM} from './BanksM'

export class BankM {
  constructor(
        public idbank: number = null,
        public accountnumber: string = '',
        public accounttype: string = '',
        public clabe: string = '',
        public idclient:  string = ''
  ) { }
}
