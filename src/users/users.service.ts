/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Inject,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
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

  async findAll() {
    const result = await this.dataSource.query(`SELECT * FROM users`);
    const users = result.map((user: User) => {
      delete user.password;
      return user;
    });
    return users;
    // sql query to select all columns except password and not hardcoded
  }

  async findOne(id: number) {
    const user: User = await this.dataSource.query(
      `SELECT * FROM users WHERE id = ?`,
      [id],
    );

    delete user.password;

    if (!user) {
      return {
        id,
        message: 'user not found',
      };
    }

    return {
      message: 'user found',
      user,
    };
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  async remove(id: number) {
    try {
      // check if the user exists
      const user = this.findOne(id);
      if (!user) {
        return null;
      }
      // delete the user
      const result = await this.dataSource.query(
        `DELETE FROM users WHERE id = ?`,
        [id],
      );
      if (result.affectedRows > 0) {
        return { message: 'user deleted successfully', id };
      }
      return new InternalServerErrorException({
        message: 'An error occured while deleting user',
      });
    } catch (error) {
      return new InternalServerErrorException({
        message: 'An error occured while deleting user',
        error,
      });
    }
  }
}
