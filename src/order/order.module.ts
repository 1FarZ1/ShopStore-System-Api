import { Module } from '@nestjs/common';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';
import { UsersService } from 'src/users/users.service';

@Module({
  controllers: [OrderController],
  providers: [OrderService, UsersService],
})
export class OrderModule {}
