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
import { LoginUserDto } from './dto/login.dto';
import { CreateUserDto } from './dto/create_user.dto';

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
  async login(loginDto: LoginUserDto) {
    const userSql: User = await this.dataSource.query(
      `SELECT * FROM users WHERE email = '${loginDto.email}' LIMIT 1 `,
    );
    console.log(userSql);

    // const user = await this.userRepository.findOneBy({
    //   email: email,
    // });
    if (!userSql) {
      throw new NotFoundException("User doesn't exist!");
    }
    const isMatch = Utils.comparePassword(
      loginDto.password,
      userSql[0].password,
    );
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
  async register(createUserDto: CreateUserDto) {
    const isExistUser = await this.dataSource.query(
      `SELECT * FROM users WHERE email = '${createUserDto.email}'`,
    );
    // const isExistUser = await this.userRepository.findOneBy({
    //   email: email,
    // });
    if (isExistUser) {
      throw new BadRequestException('User alredy exist !');
    }
    const hashedPassword = Utils.hashPassword(createUserDto.password);

    // const user = this.userRepository.create({
    //   email: email,
    //   name: name,
    //   password: password,
    //   image: '',
    // });
    const user = await this.dataSource.query(
      `INSERT INTO users (email,name,password,image) VALUES ('${createUserDto.email}','${createUserDto.name}','${hashedPassword}','')`,
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
