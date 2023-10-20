/* eslint-disable prettier/prettier */
import {
    BadRequestException,
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
  } from '@nestjs/common';
  import { Product } from './product';
import { ProductService } from './product.service';
  
  @Controller('products')
  export class ProductController {
    constructor(private readonly appService: ProductService) {}
  
    @Get()
    getAllProducts(): Product[] {
      return this.appService.getAllProducts();
    }
  
    @Get('/detaills/:productId')
    getProductDetaills(@Param('productId') productId: string): Product {
      return this.appService.getProductDetaills(productId);
    }

    // add
    @Post('/detaills')
    addProduct(@Body() product: Product): Product {
      return this.appService.addProduct(product);
    }
  
    @Post('/detaills/:productId')
    updateProductDetaills(@Param('productId') productId: string): Product {
      if (!productId) {
        throw new BadRequestException('productId is missing in the request body');
      }
      return this.appService.updateProductDetaills(productId);
    }

    //delete
    @Delete('/detaills/:productId')
    deleteProduct(@Param('productId') productId: string): Product {
      return this.appService.deleteProduct(productId);
    }
  }
  

