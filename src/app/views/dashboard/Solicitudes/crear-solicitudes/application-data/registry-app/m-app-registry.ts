export class ApplicationModel {
  constructor(
    public amountrequest: number =  null,
    public applicationdate: Date = new Date(),
    public place: string = '',
    public creditterm: number = null,
    public projectname: string = ''
  ) {}
}
