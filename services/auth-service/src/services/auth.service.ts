import { BadRequestError } from '@zkode/tms-lib';
import { CreateUserDto, LoggedInUserDto } from '../interfaces/dto';
import { User } from '../models';
import { compareHashPassword, toHashPassword } from '../helpers';

class AuthService {
  async createUser(resource: CreateUserDto) {
    let { email, password } = resource;

    const isEmailExist = await User.findOne({ email });

    if (isEmailExist) {
      throw new BadRequestError('This email already exists');
    }

    password = await toHashPassword(password);

    const user = User.build({ email, password });

    return user.save();
  }

  async loggedIn(resource: LoggedInUserDto) {
    const { email, password } = resource;

    const user = await User.findOne({ email });

    if (!user) {
      throw new BadRequestError('Invalid credentials');
    }

    const isPasswordMatched = await compareHashPassword(
      user.password,
      password
    );

    if (!isPasswordMatched) {
      throw new BadRequestError('Invalid credentials');
    }

    return user;
  }

  async getUserById(id: string) {
    const user = await User.findById(id);

    if (!user) {
      throw new BadRequestError('User not found');
    }

    return user;
  }
}

export default new AuthService();
