import {
  Body,
  Controller,
  HttpStatus,
  Post,
  HttpCode,
  Get,
  UseGuards,
  Req,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginUserDto } from './dto/login.dto';
import { CreateUserDto } from './dto/create_user.dto';
import { ApiResponse } from '@nestjs/swagger';
import { AuthGuard } from './auth.guard';
import { Role } from './entity/user.entity';
type Result = {
  access_token: string;
  message: string;
};
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'login successful',
    schema: {
      example: {
        email: 'fares1@test.com',
        password: '1234',
      },
    },
  })
  @Post('/login')
  async login(@Body() loginUserDto: LoginUserDto): Promise<any> {
    const result: Result = await this.authService.login(loginUserDto);
    console.log(
      '🚀 ~ file: auth.controller.ts ~ line 35 ~ AuthController ~ loginUserDto',
      loginUserDto,
    );

    return {
      message: 'login successful',
      access_token: result.access_token,
    };
  }
  @HttpCode(HttpStatus.CREATED)
  @Post('admin/register')
  async loginAdmin(@Body() createAdminDto: CreateUserDto): Promise<any> {
    const result: Result = await this.authService.registerAdmin(createAdminDto);

    return {
      message: 'register successful',
      access_token: result.access_token,
    };
  }

  @HttpCode(HttpStatus.CREATED)
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'register successful',
    schema: {
      example: {
        email: 'fares1@test.com',
        password: '1234',
        name: 'fares',
      },
    },
  })
  @Post('/register')
  async regitser(@Body() createUserDto: CreateUserDto): Promise<any> {
    const result: Result = await this.authService.register(createUserDto);
    return {
      message: 'register successful',
      access_token: result.access_token,
    };
  }

  @Get('/testing')
  @UseGuards(AuthGuard)
  async testing(@Req() request): Promise<any> {
    if (request.user == Role.USER) {
      return {
        message: 'testing user',
        user: request.user,
      };
    }
    return {
      message: 'testing admin',
      user: request.user,
    };
  }
}
