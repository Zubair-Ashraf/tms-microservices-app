import { BadRequestError } from '../classes/errors';
import { CreateUserDto } from '../interfaces/dto';
import { User } from '../models';
import { toHashPassword } from '../helpers';

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
}

export default new AuthService();
