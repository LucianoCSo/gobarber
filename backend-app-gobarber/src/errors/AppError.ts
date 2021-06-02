export default class AppError {
  public readonly massager: string;
  public readonly statusCode: number;

  constructor(messager: string, statusCode = 400) {
    this.massager = messager;
    this.statusCode = statusCode;
  }
}
