import { CreateUserDto } from '../interfaces/dto';
import { User } from '../models';

class AuthService {
  async createUser(resource: CreateUserDto) {
    const { email, password } = resource;

    const isEmailExist = await User.findOne({ email });

    if (isEmailExist) {
      throw new Error('User with email already exists');
    }

    const user = User.build({ email, password });

    return user.save();
  }
}

export default new AuthService();