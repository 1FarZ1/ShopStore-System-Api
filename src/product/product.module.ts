/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { databaseProviders } from 'src/common/db.providers';
@Module({
  imports: [
    
  ],
  controllers: [ProductController],
  providers: [ProductService,...databaseProviders],
})
export class ProductModule {}
