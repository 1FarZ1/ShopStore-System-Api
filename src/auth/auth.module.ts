import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { userProvider } from './auth.providers';

@Module({
  providers: [AuthService, ...userProvider],
  controllers: [AuthController],
  imports: [],
})
export class AuthModule {}
