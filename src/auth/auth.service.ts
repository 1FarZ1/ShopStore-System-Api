/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  BadRequestException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Repository, DataSource } from 'typeorm';
import { User } from './entity/user.entity';
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
    // data source
    @Inject('DATA_SOURCE') private dataSource: DataSource,
    private jwtService: JwtService,
  ) {}
  async login(email: string, password: string) {
    const userSql: User = await this.dataSource.query(
      `SELECT * FROM users WHERE email = '${email}'`,
    );

    // const user = await this.userRepository.findOneBy({
    //   email: email,
    // });
    if (!userSql) {
      throw new NotFoundException("User doesn't exist!");
    }
    const isMatch = Utils.comparePassword(password, userSql.password);
    if (!isMatch) {
      throw new BadRequestException('Wrong credentials !');
    }

    const payload = { sub: userSql.id, username: userSql.name };
    const access_token = await this.jwtService.signAsync(payload);

    return {
      message: 'user created',
      access_token: access_token,
    };
  }
  async register(email: string, password: string, name: string) {
    const isExistUser = await this.dataSource.query(
      `SELECT * FROM users WHERE email = '${email}'`,
    );
    // const isExistUser = await this.userRepository.findOneBy({
    //   email: email,
    // });
    if (isExistUser) {
      throw new BadRequestException('User alredy exist !');
    }
    password = Utils.hashPassword(password);

    // const user = this.userRepository.create({
    //   email: email,
    //   name: name,
    //   password: password,
    //   image: '',
    // });
    const user = await this.dataSource.query(
      `INSERT INTO users (email,name,password,image) VALUES ('${email}','${name}','${password}','')`,
    );
    // await this.userRepository.save(user);
    const payload = { sub: user.id, username: user.name };
    const access_token = await this.jwtService.signAsync(payload);
    return {
      message: 'user created',
      access_token: access_token,
    };
  }
}
