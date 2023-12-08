/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { UsersService } from 'src/users/users.service';
@Module({
  imports: [],
  controllers: [ProductController],
  providers: [ProductService,
    UsersService],
})
export class ProductModule {}
