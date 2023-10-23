import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { userProvider } from './auth.providers';
import { databaseProviders } from 'src/db.providers';
import { JwtModule } from '@nestjs/jwt';

@Module({
  providers: [AuthService, ...userProvider, ...databaseProviders],
  controllers: [AuthController],
  imports: [
    JwtModule.register({
      global: true,
      secret: 'secretKey',
      signOptions: { expiresIn: '60s' },
    }),
  ],
  exports: [...databaseProviders],
})
export class AuthModule {}
