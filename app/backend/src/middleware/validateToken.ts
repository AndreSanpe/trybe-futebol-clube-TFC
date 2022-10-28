import { NextFunction, Request, Response } from 'express';
import TokerManager from '../utils/jwt.util';

const validateToken = (req:Request, res:Response, next:NextFunction) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ message: 'Invalid authorization' });
  }

  const isItValid = TokerManager.verify(authorization);
  if (!isItValid) {
    return res.status(401).json({ message: 'Invalid authorization' });
  }

  next();
};

export default validateToken;
