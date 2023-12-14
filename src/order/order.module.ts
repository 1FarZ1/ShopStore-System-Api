import { Module } from '@nestjs/common';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';
import { UsersService } from 'src/users/users.service';
import { ProductService } from 'src/product/product.service';

@Module({
  controllers: [OrderController],
  providers: [OrderService, UsersService, ProductService],
})
export class OrderModule {}
