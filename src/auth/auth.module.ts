import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { userProvider } from './auth.providers';
import { databaseProviders } from 'src/db.providers';

@Module({
  providers: [AuthService, ...userProvider, ...databaseProviders],
  controllers: [AuthController],
  imports: [],
  exports: [...databaseProviders],
})
export class AuthModule {}
