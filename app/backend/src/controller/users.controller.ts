import { NextFunction, Request, Response } from 'express';
import UserService from '../services/users.service';

class UsersController {
  constructor(private userService = new UserService()) { }

  public getUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const token = await this.userService.login(req.body);
      return res.status(200).json({ token });
    } catch (error) {
      return next(error);
    }
  };
}

export default UsersController;
