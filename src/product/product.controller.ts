/* eslint-disable prettier/prettier */
import {
  // BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from './entity/product.entity';
import { ProductDto } from './dto/product_dto';




type QueryType = {
  page: number;
  limit: string;
  search : string;
};
@Controller('products')
export class ProductController {
  constructor(private readonly appService: ProductService) {}

  @Get()
  async getAllProducts(
    @Query() query: QueryType,
  )
  : Promise<Product[]> {
   
    return this.appService.getAllProducts(
      query.page, query.limit, query.search
    );
  }

  @Get('/detaills/:productId')
  async getProductDetaills(
    @Param('productId') productId: string,
  ): Promise<Product> {
    
    return this.appService.getProductDetaills(productId);
  }


  @Post('/detaills')
  async addProduct(@Body() productDto:ProductDto): Promise<Product> {
    return this.appService.addProduct(
      productDto
    );
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
