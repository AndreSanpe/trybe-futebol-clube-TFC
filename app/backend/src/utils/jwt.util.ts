import 'dotenv/config';
import * as jwt from 'jsonwebtoken';
import { IVerifyUser } from '../interfaces/IUser';

export default class TokerManager {
  public static create({ email, role }: IVerifyUser): string {
    const userCredentials = { email, role };

    const secret = process.env.JWT_SECRET || 'secretToken';
    const token = jwt.sign({ data: userCredentials }, secret);
    return token;
  }

  public static verify(token: string) {
    const secret = process.env.JWT_SECRET || 'secretToken';
    const tokenValidation = jwt.verify(token, secret);
    return tokenValidation as IVerifyUser;
  }
}
