/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  @ApiProperty(
    {
      description: 'user email',
      type: String,
      default: 'email'
    }
  )
  email: string;

  @IsNotEmpty()
  @IsString()

  @ApiProperty(
    {
      description: 'user password',
      type: String,
      default: 'password'
    }
  )
  password: string;

  @IsNotEmpty()
  @IsString()

  @ApiProperty(
    {
      description: 'user name',
      type: String,
      default: 'name'
    }
  )
  name: string;
}
