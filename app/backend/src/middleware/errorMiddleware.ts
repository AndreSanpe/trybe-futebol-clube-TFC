import { NextFunction, Request, Response } from 'express';
import Error from '../utils/HttpError';

// this implementation was idealized from this link: https:// wanago.io/2018/12/17/typescript-express-error-handling-validation/
const errorMiddleware = (
  error: Error,
  request: Request,
  response: Response,
  _next: NextFunction,
) => {
  const status = error.status || 500;
  const message = error.message || 'Something went wrong';
  response
    .status(status)
    .send({
      status,
      message,
    });
};

export default errorMiddleware;
