/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { databaseProviders } from 'src/auth/auth.providers';
import { productProvider } from './product.provider';
@Module({
  imports: [],
  controllers: [ProductController],
  providers: [ProductService,...databaseProviders,...productProvider],
})
export class ProductModule {}
