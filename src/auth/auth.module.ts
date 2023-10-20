import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { databaseProviders } from './auth.providers';

@Module({
  providers: [...databaseProviders, AuthService],
  exports: [...databaseProviders],
  controllers: [AuthController],
  imports: [],
})
export class AuthModule {}
