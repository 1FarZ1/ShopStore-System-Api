import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { databaseProviders } from 'src/common/db.providers';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: 'secretKey',
      signOptions: { expiresIn: '60s' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, ...databaseProviders],
})
export class AuthModule {}
