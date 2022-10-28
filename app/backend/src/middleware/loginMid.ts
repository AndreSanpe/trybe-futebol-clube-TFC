import { NextFunction, Request, Response } from 'express';
import login from './schemas/login';

const loginMid = (req:Request, res:Response, next:NextFunction) => {
  const { error } = login.validate(req.body);

  if (error) {
    return res.status(400).json({ message: error.message });
  }

  next();
};

export default loginMid;
