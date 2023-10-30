import { Repository } from 'typeorm';
import { User } from '../models/entities/user';

export class UserService {
  private userRepository: Repository<User>;

  constructor(userRepository: Repository<User>) {
    this.userRepository = userRepository;
  }

  async getAllUsers() {
    return this.userRepository.find();
  }

}






