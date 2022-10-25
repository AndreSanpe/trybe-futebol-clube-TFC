import Users from '../database/models/Users';

class LoginService {
  private model = Users;
  public async login(email: string, password: string) {
    await this.model.findOne({ where: { email, password } });
  }
}

export default LoginService;
