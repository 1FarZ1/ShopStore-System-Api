import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
// import { User } from './user.entity';

type Result = {
  access_token: string;
  message: string;
};
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/login')
  async login(
    @Body('email') email: string,
    @Body('password') password: string,
  ): Promise<any> {
    if (!email || !password) {
      return new BadRequestException('email or password is missing');
    }
    const result: Result = await this.authService.login(email, password);
    return {
      statusCode: 201,
      message: 'login successful',
      access_token: result.access_token,
    };
  }
  @Post('/register')
  async regitser(
    @Body('email') email: string,
    @Body('password') password: string,
    @Body('name') name: string,
  ): Promise<any> {
    if (!email || !password || !name) {
      return new BadRequestException('email or password or name is missing');
    }
    const result: Result = await this.authService.register(
      email,
      password,
      name,
    );
    return {
      statusCode: 201,
      message: 'register successful',
      access_token: result.access_token,
    };
  }
}
