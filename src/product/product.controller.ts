/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from './entity/product.entity';
import { ProductDto } from './dto/product.dto';
import { EditProductDto } from './dto/edit-product.dto';
import { ApiQuery, ApiResponse } from '@nestjs/swagger';
import { QueryDto } from './dto/queryProducts.dto';
import { RolesGuard } from 'src/auth/roles.guard';
import { Roles } from 'src/common/roles.decorator';
import { Role } from 'src/auth/entity/user.entity';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  @Roles(Role.ADMIN)
  @UseGuards(RolesGuard)
  @UseGuards(AuthGuard)
  @ApiResponse({ status: HttpStatus.OK, description: 'Successful' })
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

  @HttpCode(HttpStatus.OK)
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
  @HttpCode(HttpStatus.CREATED)
  @ApiQuery({ name: 'name', required: true, type: String, description: 'Description for param1' })
  @ApiQuery({ name: 'price', required: true, type: Number, description: 'Description for param2' })
  @ApiQuery({ name: 'quantity', required: true, type: Number, description: 'Description for param2' })
  async addProduct(@Body() productDto:ProductDto): Promise<Product> {
    return this.productService.addProduct(
      productDto
    );
  }

  @Patch('/update/:productId')
  @HttpCode(HttpStatus.OK)
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
  @HttpCode(HttpStatus.OK)
  async deleteProduct(@Param('productId',ParseIntPipe) productId:number): Promise<any> {
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
