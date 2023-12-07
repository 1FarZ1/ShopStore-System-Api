/* eslint-disable @typescript-eslint/no-unused-vars */
import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { DataSource } from 'typeorm';
import { User } from '../auth/entity/user.entity';

@Injectable()
export class UsersService {
  constructor(@Inject('DATA_SOURCE') private dataSource: DataSource) {}
  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAll() {
    // select everything from the user table except the password
    return this.dataSource.query(`SELECT id,name,email,image FROM users`);
  }

  async findOne(id: number) {
    const user: User = await this.dataSource.query(
      `SELECT * FROM users WHERE id = ?`,
      [id],
    );

    return user[0];
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
