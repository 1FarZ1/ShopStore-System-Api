import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginUserDto } from './dto/login.dto';
import { CreateUserDto } from './dto/create_user.dto';
type Result = {
  access_token: string;
  message: string;
};
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/login')
  async login(@Body() loginUserDto: LoginUserDto): Promise<any> {
    const result: Result = await this.authService.login(loginUserDto);
    console.log('hello im here');
    return {
      statusCode: 201,
      message: 'login successful',
      access_token: result.access_token,
    };
  }
  @Post('/register')
  async regitser(@Body() createUserDto: CreateUserDto): Promise<any> {
    const result: Result = await this.authService.register(createUserDto);
    return {
      statusCode: 201,
      message: 'register successful',
      access_token: result.access_token,
    };
  }
}
