import { Body, Controller, HttpStatus, Post, HttpCode } from '@nestjs/common';
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

  @HttpCode(HttpStatus.OK)
  @Post('/login')
  async login(@Body() loginUserDto: LoginUserDto): Promise<any> {
    const result: Result = await this.authService.login(loginUserDto);

    return {
      message: 'login successful',
      access_token: result.access_token,
    };
  }
  @HttpCode(HttpStatus.OK)
  @Post('admin/register')
  async loginAdmin(@Body() createAdminDto: CreateUserDto): Promise<any> {
    const result: Result = await this.authService.registerAdmin(createAdminDto);

    return {
      message: 'register successful',
      access_token: result.access_token,
    };
  }

  @HttpCode(HttpStatus.CREATED)
  @Post('/register')
  async regitser(@Body() createUserDto: CreateUserDto): Promise<any> {
    const result: Result = await this.authService.register(createUserDto);
    return {
      message: 'register successful',
      access_token: result.access_token,
    };
  }
}
