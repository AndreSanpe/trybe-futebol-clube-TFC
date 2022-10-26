class HttpError extends Error {
  status: number;
  // message: string;
  constructor(status: number, message: string) {
    super(message);
    this.status = status;
    // this.message = message;
  }
}

//  this implementation was idealized from this like https://wanago.io/2018/12/17/typescript-express-error-handling-validation/

export default HttpError;
