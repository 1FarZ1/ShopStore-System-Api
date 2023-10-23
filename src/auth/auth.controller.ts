import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/login')
  async login(
    @Body('email') email: string,
    @Body('password') password: string,
  ): Promise<any> {
    if (!email || !password) {
      return {
        statusCode: 400,
        message: 'email or password is missing',
      };
    }
    const result = await this.authService.login(email, password);
    return {
      statusCode: 201,
      message: 'login successful',
      user: result.user,
    };
  }
  @Post('/register')
  async regitser(
    @Body('email') email: string,
    @Body('password') password: string,
    @Body('name') name: string,
  ): Promise<any> {
    if (!email || !password || !name) {
      return {
        statusCode: 400,
        message: 'email or password or name is missing',
      };
    }
    const result = await this.authService.register(email, password, name);
    return {
      statusCode: 201,
      message: 'register successful',
      user: result.user,
    };
  }
}
