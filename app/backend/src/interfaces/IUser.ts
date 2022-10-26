interface ILogin {
  password: string;
  email: string;
}

interface IVerifyUser {
  role: string;
  email: string;
}

interface IUser {
  id: number;
  email: string;
  role: string;
  password: string;
  username: string;
}

export { ILogin, IUser, IVerifyUser };
