import 'dotenv/config';
import * as jwt from 'jsonwebtoken';
import IUser from '../interfaces/IUser';

export default class TokerManager {
  public static create({ email, password }: IUser): string {
    const userCredentials = { email, password };

    const secret = process.env.JWT_SECRET || 'secretToken';
    const token = jwt.sign({ data: userCredentials }, secret);
    return token;
  }

  // public static verify(token: string):any {
  //   const secret = process.env.JWT_SECRET || 'secretToken';
  //   const tokenValidation = jwt.verify(token, secret);
  //   return tokenValidation;
  // }
}
