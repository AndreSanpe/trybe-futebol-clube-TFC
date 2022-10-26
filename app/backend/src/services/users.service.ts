import * as bcrypt from 'bcryptjs';
import { ILogin, IUserRole } from '../interfaces/IUser';
import User from '../database/models/User';
import HttpError from '../utils/HttpError';
import TokerManager from '../utils/jwt.util';

const errorMessage = 'Incorrect email or password';

class LoginService {
  // private model = User;
  // this implementation was suggested by Junior.

  public login = async ({ email, password: passwordUser }: ILogin) => {
    const user = await User.findOne({ where: { email } });

    if (!user) { throw new HttpError(401, errorMessage); }

    const { password, role } = user;
    const passBcrypto = await bcrypt.compare(passwordUser, password);

    if (!passBcrypto) { throw new HttpError(401, errorMessage); }

    const token = TokerManager.create({ email, role });

    return token;
  };

  public validate = (token: string) => {
    const userRole = TokerManager.verify(token);

    return userRole;
  };
}

export default LoginService;
