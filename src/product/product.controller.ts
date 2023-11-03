/* eslint-disable prettier/prettier */
import {
  // BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from './entity/product.entity';
import { ProductDto } from './dto/product.dto';
import { EditProductDto } from './dto/edit-product.dto';




type QueryType = {
  page: number;
  limit: string;
  search : string;
};


@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  async getAllProducts(
    @Query() query: QueryType,
  )
  : Promise<Product[]> {
    return this.productService.getAllProducts(
      query.page, query.limit, query.search
    );
  }

  @Get('/detaills/:productId')
  async getProductDetaills(
    @Param('productId', ParseIntPipe) productId:number,
  ): Promise<Product> {
    return this.productService.getProductDetaills(productId);
  }


  @Post('/add')
  async addProduct(@Body() productDto:ProductDto): Promise<Product> {
    return this.productService.addProduct(
      productDto
    );
  }

  @Patch('/update/:productId')
  async updateProductDetaills(@Param('productId',ParseIntPipe) productId: number,
  @Body() productDto:EditProductDto 
  ): Promise<Product> {
     const result  =  await this.productService.updateProductDetaills(productId,productDto);
      return result;

  }

  @Delete('/delete/:productId')
  async deleteProduct(@Param('productId',ParseIntPipe) productId:number): Promise<any> {
    // add better messages and handling  in here 
    if( await this.productService.deleteProduct(productId)){
      return {
        id : productId,
        message : "product deleted successfully"


      };
    }
    return {
      id : productId, 
      message : "product not found , please provide a valid product id"
    };
  }
}
