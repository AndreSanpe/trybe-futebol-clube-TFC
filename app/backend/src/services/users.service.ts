import * as bcrypt from 'bcryptjs';
import { ILogin } from '../interfaces/IUser';
import User from '../database/models/User';
import HttpError from '../utils/HttpError';
import TokerManager from '../utils/jwt.util';

class LoginService {
  // private model = User;
  // this implementation was suggested by Junior.
  public login = async ({ email, password: passwordUser }: ILogin) => {
    const user = await User.findOne({ where: { email } });
    if (!user) { throw new HttpError(401, 'Username or password invalid'); }
    console.log(user);

    const { password } = user;
    const passBcrypto = await bcrypt.compare(passwordUser, password);

    if (!passBcrypto) { throw new HttpError(401, 'Username or password invalid'); }

    const token = TokerManager.create({ email, password });

    return token;
  };
}

export default LoginService;
