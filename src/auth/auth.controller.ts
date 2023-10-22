import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/login')
  login(@Body('email') email: string, @Body('password') password: string): any {
    const result = this.authService.login(email, password);
    if (result) {
      return {
        statusCode: 201,
        message: 'login successful',
      };
    } else {
      return {
        statusCode: 401,
        message: 'unauthorized',
      };
    }
  }
}
