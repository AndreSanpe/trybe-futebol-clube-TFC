import IUser from '../interfaces/IUser';
import Users from '../database/models/Users';

class LoginService {
  // private model = Users;
  // this implementation was suggested by Junior.
  public login = async ({ email }: IUser) => {
    const user = await Users.findOne({ where: { email } });
    return user;
  };
}

export default LoginService;
