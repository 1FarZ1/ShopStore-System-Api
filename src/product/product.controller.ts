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



// class ProductDto {
//   name: string;
//   price: number;
//   description: string;
//   image: string;
// }

type QueryType = {
  page: number;
  limit: number;
};
@Controller('products')
export class ProductController {
  constructor(private readonly appService: ProductService) {}

  @Get()
  async getAllProducts(
    @Query() query: QueryType,
  )
  : Promise<Product[]> {
    console.log(
      '🚀 ~ file: product.controller.ts ~ line 50 ~ ProductController ~ getAllProducts ~ query',
      query,
    
    );
    return this.appService.getAllProducts(
      query.page, query.limit
    );
  }

  @Get('/detaills/:productId')
  async getProductDetaills(
    @Param('productId') productId: string,
  ): Promise<Product> {
    return this.appService.getProductDetaills(productId);
  }


  @Post('/detaills')
  async addProduct(@Body('name') name :string , @Body('price') price:number ,@Body('description') description:string,@Body('image') image:string ): Promise<Product> {
    return this.appService.addProduct(
      name, price,description,image
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
