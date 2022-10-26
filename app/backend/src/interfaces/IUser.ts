interface ILogin {
  password: string;
  email: string;
}

interface IVerifyUser {
  role: string;
  email: string;
}

interface IVerifyRole {
  data: { email: string; role: string };
  iat: string;
}

interface IUser {
  id: number;
  email: string;
  role: string;
  password: string;
  username: string;
}

interface IUserRole {
  role: string;
}

export { ILogin, IUser, IVerifyUser, IUserRole, IVerifyRole };
