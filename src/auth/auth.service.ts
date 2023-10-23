/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  BadRequestException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import * as bcrypt from 'bcrypt';
//IMPORT JWT
import { JwtService } from '@nestjs/jwt';

class Utils {
  static comparePassword(password: string, hash: string): boolean {
    return bcrypt.compareSync(password, hash);
  }

  static hashPassword(password: string): string {
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(password, salt);
  }
}
@Injectable()
export class AuthService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}
  async login(email: string, password: string) {
    const user = await this.userRepository.findOneBy({
      email: email,
    });
    if (!user) {
      throw new NotFoundException("User doesn't exist!");
    }
    const isMatch = Utils.comparePassword(password, user.password);
    if (!isMatch) {
      throw new BadRequestException('Wrong credentials !');
    }

    const payload = { sub: user.id, username: user.name };
    const access_token = await this.jwtService.signAsync(payload);

    return {
      message: 'user created',
      access_token: access_token,
    };
  }
  async register(email: string, password: string, name: string) {
    const isExistUser = await this.userRepository.findOneBy({
      email: email,
    });
    if (isExistUser) {
      throw new BadRequestException('User alredy exist !');
    }
    password = Utils.hashPassword(password);

    const user = this.userRepository.create({
      email: email,
      name: name,
      password: password,
      image: '',
    });
    await this.userRepository.save(user);
    const payload = { sub: user.id, username: user.name };
    const access_token = await this.jwtService.signAsync(payload);
    return {
      message: 'user created',
      access_token: access_token,
    };
  }
}
