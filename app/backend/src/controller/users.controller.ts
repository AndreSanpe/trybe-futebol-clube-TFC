import { NextFunction, Request, Response } from 'express';
import UserService from '../services/users.service';

class UsersController {
  constructor(private userService = new UserService()) { }

  public getUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = await this.userService.login(req.body);
      res.status(201).json({ user });
    } catch (error) {
      next(error);
    }
  };
}

export default UsersController;
