/* eslint-disable prettier/prettier */
import {
  // BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from './product.entity';

@Controller('products')
export class ProductController {
  constructor(private readonly appService: ProductService) {}

  @Get()
  async getAllProducts(): Promise<Product[]> {
    return this.appService.getAllProducts();
  }

  @Get('/detaills/:productId')
  async getProductDetaills(
    @Param('productId') productId: string,
  ): Promise<Product> {
    return this.appService.getProductDetaills(productId);
  }

  // add
  @Post('/detaills')
  async addProduct(@Body() product: Product): Promise<Product> {
    return this.appService.addProduct(product);
  }

  // @Post('/detaills/:productId')
  // updateProductDetaills(@Param('productId') productId: string): Product {
  //   if (!productId) {
  //     throw new BadRequestException('productId is missing in the request body');
  //   }
  //   return this.appService.updateProductDetaills(productId);
  // }

  //delete
  @Delete('/detaills/:productId')
  async deleteProduct(@Param('productId') productId: string): Promise<boolean> {
    return this.appService.deleteProduct(productId);
  }
}
