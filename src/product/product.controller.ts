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
import { ApiQuery, ApiResponse } from '@nestjs/swagger';
// import { log } from 'console';
import { QueryDto } from './dto/queryProducts.dto';




// type QueryType = {
//   page: number;
//   limit: number;
//   search : string;
// };


@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  @ApiResponse({ status: 200, description: 'Successful' })
  @ApiQuery({ name: 'page', required: false, type: Number, description: 'Description for param1' })
  @ApiQuery({ name: 'limit', required: false, type: Number, description: 'Description for param2' })
  @ApiQuery({ name: 'search', required: false, type: String, description: 'Description for param2' })
  async getAllProducts(
    @Query() query:QueryDto,
    
    )

  : Promise<Product[]> {
    console.log("🚀 ~ file: product.controller.ts:45 ~ ProductController ~ query:", query)

    return this.productService.getAllProducts(
query
    );
    
  }

  @Get('/detaills/:productId')
  async getProductDetaills(
    @Param('productId', ParseIntPipe) productId:number,
  ): Promise<any> {
   const product = await this.productService.getProductDetaills(productId);
    if(product){
      return {
        id : productId,
        message : "product found",
        product : product,
      }
    }
  }


  @Post('/add')
  @ApiQuery({ name: 'name', required: true, type: String, description: 'Description for param1' })
  @ApiQuery({ name: 'price', required: true, type: Number, description: 'Description for param2' })
  @ApiQuery({ name: 'quantity', required: true, type: Number, description: 'Description for param2' })
  async addProduct(@Body() productDto:ProductDto): Promise<Product> {
    return this.productService.addProduct(
      productDto
    );
  }

  @Patch('/update/:productId')
  async updateProductDetaills(@Param('productId',ParseIntPipe) productId: number,
  @Body() productDto:EditProductDto 
  ): Promise<any> {
     const result  =  await this.productService.updateProductDetaills(productId,productDto);
    return {
      id : productId,
      message : "product updated successfully",
      updatedProduct : result
    }
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
