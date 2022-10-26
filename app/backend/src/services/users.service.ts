import * as bcrypt from 'bcryptjs';
import IUser from '../interfaces/IUser';
import Users from '../database/models/Users';
import HttpError from '../utils/HttpError';
import TokerManager from '../utils/jwt.util';

class LoginService {
  // private model = Users;
  // this implementation was suggested by Junior.
  public login = async ({ email, password: passwordUser }: IUser) => {
    const user:any = await Users.findOne({ where: { email } });
    const { password } = user;
    const passBcrypto = await bcrypt.compare(passwordUser, password);

    if (!passBcrypto) { throw new HttpError(401, 'Username or password invalid'); }

    const token = TokerManager.create({ email, password });

    return token;
  };
}

export default LoginService;
