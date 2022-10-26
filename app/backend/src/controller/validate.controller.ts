import { NextFunction, Request, Response } from 'express';
import HttpError from '../utils/HttpError';
import UserService from '../services/users.service';

class ValidateController {
  constructor(private userService = new UserService()) { }

  public validateUser = async (req: Request, res: Response, next: NextFunction) => {
    const { authorization } = req.headers;

    if (!authorization) {
      return new HttpError(401, 'Invalid authorization');
    }
    try {
      const { data: { role } } = this.userService.validate(authorization);
      return res.status(200).json({ role });
    } catch (error) {
      return next(error);
    }
  };
}

export default ValidateController;
