/* eslint-disable prettier/prettier */
import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  Request,
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
    @Request() req: any,
  )
  : Promise<Product[]> {
    console.log(req.headers);
    console.log(req.body);
    console.log(req.params);

   
    return this.productService.getAllProducts(
      query.page, query.limit, query.search
    );
  }

  @Get('/detaills/:productId')
  async getProductDetaills(
    @Param('productId') productId: string,
  ): Promise<Product> {

    if (!productId) {
      throw new BadRequestException('productId is missing in the request body');
    }
    
    return this.productService.getProductDetaills(productId);
  }


  @Post('/add')
  async addProduct(@Body() productDto:ProductDto): Promise<Product> {
    return this.productService.addProduct(
      productDto
    );
  }

  @Patch('/update/:productId')
  async updateProductDetaills(@Param('productId') productId: string,
  @Body() productDto:EditProductDto 
  ): Promise<Product> {
    if (!productId) {
      throw new BadRequestException('productId is missing in the request body');
    }
     const result  =  await this.productService.updateProductDetaills(productId,productDto);
      return result;

  }

  @Delete('/delete/:productId')
  async deleteProduct(@Param('productId') productId: string): Promise<boolean> {

    if (!productId) {
      throw new BadRequestException('productId is missing in the request body');
    }
    return this.productService.deleteProduct(productId);
  }
}
