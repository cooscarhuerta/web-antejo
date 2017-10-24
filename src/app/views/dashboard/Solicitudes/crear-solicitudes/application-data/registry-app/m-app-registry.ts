export class ApplicationModel {
  constructor(
    public amountrequest: number =  null,
    public applicationdate: Date = null,
    public place: string = '',
    public creditterm: number = null,
    public projectname: string = ''
  ) {}
}
