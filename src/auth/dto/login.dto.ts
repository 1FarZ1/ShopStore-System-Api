/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class LoginUserDto {
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

  @ApiProperty(
    {
      description: 'user password',
      type: String,
      default: 'password'
    }
  )
  password: string;
}
