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
  // UseGuards,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from './entity/product.entity';
import { AddProductDto } from './dto/add-product.dto';
import { EditProductDto } from './dto/edit-product.dto';
import { ApiBearerAuth, ApiQuery, ApiResponse } from '@nestjs/swagger';
import { QueryDto } from './dto/queryProducts.dto';
// import { RolesGuard } from 'src/shared/roles.guard';
// import { Roles } from 'src/shared/roles.decorator';
// import { Role } from 'src/auth/entity/user.entity';
// import { AuthGuard } from 'src/auth/auth.guard';


// removing gaurds for testing and development

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  // @Roles(Role.ADMIN)
  // @UseGuards(RolesGuard)
  // @UseGuards(AuthGuard)
  
  @ApiResponse({ status: HttpStatus.OK, description: 'get all products' })
  @ApiQuery({ name: 'page', required: false, type: Number, description: 'page number' })
  @ApiQuery({ name: 'limit', required: false, type: Number, description: 'products per page' })
  @ApiQuery({ name: 'search', required: false, type: String, description: 'search query' })
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
    else{
      return {
        id : productId,
        message : "product not found , please provide a valid product id"
      }
    }
  }


  @Post('/add')
  @HttpCode(HttpStatus.CREATED)
  @ApiBearerAuth()
  // @Roles(Role.ADMIN)
  // @UseGuards(RolesGuard)
  // @UseGuards(AuthGuard)
  @ApiResponse({ status: HttpStatus.CREATED, description: 'add product' })
  async addProduct(@Body() productDto:AddProductDto): Promise<any> {
    return this.productService.addProduct(
      productDto
    );}
    
  

  @Patch('/update/:productId')
  @HttpCode(HttpStatus.OK)
  // @ApiBearerAuth()
  // @Roles(Role.ADMIN)
  // @UseGuards(RolesGuard)
  // @UseGuards(AuthGuard)

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
  @ApiBearerAuth()
  // @Roles(Role.ADMIN)
  // @UseGuards(RolesGuard)
  // @UseGuards(AuthGuard)
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
