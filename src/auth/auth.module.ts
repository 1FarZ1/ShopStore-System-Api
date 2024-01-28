import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
//import User from './entity/user.entity';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: 'secret', // no need to use env since its a dummy project
      signOptions: { expiresIn: process.env.JWT_EXPIRED || '10000000s' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
