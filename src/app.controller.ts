import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Param,
  Post,
} from '@nestjs/common';
import { AppService } from './app.service';
import { Product } from './product/product';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getAllProducts(): Product[] {
    const products: Product[] = this.appService.getAllProducts();
    return products;
  }

  @Get('/detaills/:productId')
  getProductDetaills(@Param('productId') productId: string): Product {
    return this.appService.getProductDetaills(productId);
  }

  @Post('/detaills')
  updateProductDetaills(@Body('productId') productId: string): Product {
    if (!productId) {
      throw new BadRequestException('productId is missing in the request body');
    }
    return this.appService.updateProductDetaills(productId);
  }
}
