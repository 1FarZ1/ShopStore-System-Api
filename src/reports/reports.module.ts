import { Module } from '@nestjs/common';
import { ReportsService } from './reports.service';
import { ReportsController } from './reports.controller';
import { UsersService } from 'src/users/users.service';
import { MailerModule } from '@nestjs-modules/mailer';

@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        host: 'smtp.gmail.com',
        port: 465,
        // tls: {
        //   ciphers: 'SSLv3',
        // },
        // secure: false, // true for 465, false for other ports
        auth: {
          user: process.env.EMAIL_ID, // generated ethereal user
          password: process.env.EMAIL_PASS, // generated ethereal password
        },
      },
      // defaults: {
      //   from: '"nest-modules" <user@outlook.com>', // outgoing email ID
      // },
    }),
  ],
  controllers: [ReportsController],
  providers: [ReportsService, UsersService],
})
export class ReportsModule {}
