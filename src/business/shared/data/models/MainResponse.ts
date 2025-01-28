export class MainResponse<T> {
  constructor(
    public message: string,
    public status: number,
    public data?: T,
    public error?: T
  ) {
    this.data = data;
    this.message = message;
    this.status = status;
    this.error = error;
  }

  static success<T>(
    message: string,
    data: T,
    status: number = 200
  ): MainResponse<T> {
    return new MainResponse<T>(message, status, data);
  }

  static error<T>(message: string, error: T): MainResponse<T> {
    return new MainResponse<T>(message, 400, undefined, error);
  }
}
