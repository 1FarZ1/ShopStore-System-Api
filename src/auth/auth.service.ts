/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  BadRequestException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class AuthService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>,
  ) {}
  async login(email: string, password: string) {
    const user = await this.userRepository.findOneBy({
      email: email,
    });
    if (!user) {
      throw new NotFoundException("User doesn't exist!");
    }

    return {
      message: 'user created',
      user: user,
    };
    // const isMatch = comparePassword(password, user.password);
    // if (!isMatch) {
    //   throw new BadRequestException('Wrong credentials !');
    // }
  }
  async register(email: string, password: string, name: string) {
    const isExistUser = await this.userRepository.findOneBy({
      email: email,
    });
    if (isExistUser) {
      throw new BadRequestException('User alredy exist !');
    }

    const user = this.userRepository.create({
      email: email,
      name: name,
      password: password,
    });
    await this.userRepository.save(user);

    return {
      message: 'user created',
      user: user,
    };
    // const isMatch = comparePassword(password, user.password);
    // if (!isMatch) {
    //   throw new BadRequestException('Wrong credentials !');
    // }
  }
}
