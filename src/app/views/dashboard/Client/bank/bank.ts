import {Banks} from './banks'

export class Bank {
  constructor(
        public id: number = null,
        public accountnumber: string = '',
        public accounttype: string = '',
        public clabe: string = '',
        public idclient:  string = '',
        public namebank: string = '',
        public idbank: string = ''
  ) { }
}
