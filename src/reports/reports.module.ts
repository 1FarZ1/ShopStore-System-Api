import { Module } from '@nestjs/common';
import { ReportsService } from './reports.service';
import { ReportsController } from './reports.controller';
import { UsersService } from 'src/users/users.service';

@Module({
  controllers: [ReportsController],
  providers: [ReportsService, UsersService],
})
export class ReportsModule {}
