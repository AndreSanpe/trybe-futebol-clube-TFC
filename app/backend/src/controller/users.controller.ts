import { Request, Response } from 'express';
import UserService from '../services/users.service';

class UsersController {
  constructor(private userService = new UserService()) { }

  public getUser = async (req: Request, res: Response) => {
    // const { password, email } = req.body;
    // const user = await this.userService.login(email, password);
    res.sendStatus(201);
  };
}

export default UsersController;
