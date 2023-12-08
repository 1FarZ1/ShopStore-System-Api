/* eslint-disable prettier/prettier */
import { BadRequestException, Inject, Injectable, InternalServerErrorException } from '@nestjs/common';
import { Product } from './entity/product.entity';
import { DataSource } from 'typeorm';
import { ProductDto } from './dto/product.dto';
import { EditProductDto } from './dto/edit-product.dto';
import { QueryDto } from './dto/queryProducts.dto';


@Injectable()
export class ProductService {
  constructor(
    // @Inject('PRODUCT_REPOSITORY')
    // private productRepository: Repository<Product>,
    @Inject('DATA_SOURCE') private dataSource: DataSource,



  ) { }
  async getAllProducts(

  query :QueryDto

  ): Promise<Product[]> {

   try {
    let { page, limit, search } = query;
    page = page || 0;
    
    limit = limit || 10;
    const offset = (page) * limit;

    // check if page and limit are valid
    if (page < 0 || limit < 1) {
      throw new BadRequestException('Invalid page or limit');
    }

    // for exemple if limit is 10 and page is 5 then offset will be 40 AND IF WE have only 10 products?
    // we need to check if offset is greater than the number of products
    
    // log the offset and limit


    if (search) {
      search = search.trim();
     


      return this.dataSource.query(
        `SELECT * FROM product WHERE name LIKE '%${search}%' LIMIT ? OFFSET ?`,
        [limit, offset]
      );
    }
   return this.dataSource.query(
      `SELECT * FROM product LIMIT ? OFFSET ?`,
      [limit, offset]
      
    );

   } catch (error) {
      throw new InternalServerErrorException(error.message);
   }
  }

  async getProductDetaills(productId: number): Promise<Product> {
   try {
    const products: Product[] = await this.dataSource.query(
      `SELECT * FROM product WHERE id = '${productId}'`,
    );
    return products[0];
   } catch (error) {
      throw new InternalServerErrorException(error.message);
   }
  }

  async updateProductDetaills(
    productId: number,
    productDto: EditProductDto,
  ): Promise<Product> {
    try {

      const product: Product = await this.getProductDetaills(productId);
      if (!product) {
        throw new BadRequestException(
          'Product not found with this id ${productId}',
        )

      }
      if (!productDto.name && !productDto.price && !productDto.description && !productDto.image && !productDto.rating && !productDto.stock && !productDto.brand && !productDto.category) {
        throw new BadRequestException(
          'No data to update',
        )
      }


      const updateFields = [];

      for (const [key, value] of Object.entries(productDto)) {
        if (value) {
          updateFields.push(`${key} = '${value}'`);
          product[key] = value;
        }
      }

      const updateQuery = `UPDATE product SET ${updateFields.join(', ')} WHERE id = '${productId}'`;

      const result: any = await this.dataSource.query(
        updateQuery,
      );

        if(result.affectedRows > 0){
          return product;

        }
      throw new InternalServerErrorException('Unable to update the product');


    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  async addProduct(
    productDto: ProductDto,
  ): Promise<any> {

    // check if the product already exists
    const result = await this.dataSource.query(
      `SELECT * FROM product WHERE name = '${productDto.name}'`,
    );
    

    if (result[0]) {
      throw new BadRequestException(
        'Product already exists',
      );
    }

    const insertResult = await this.dataSource.query(
      `INSERT INTO product (name,price,description,image,rating,stock,brand,category) VALUES ('${productDto.name}','${productDto.price}','${productDto.description}','${productDto.image}','${productDto.rating}','${productDto.stock}','${productDto.brand}','${productDto.category}')`,
    );
   

    // get detaills about product
    const product = await this.getProductDetaills(insertResult.insertId);
    
 
    return {
      "message": "product added successfully",
      "product": product
    };
  }

  async deleteProduct(productId: number): Promise<boolean> {
    const result  = await this.dataSource.query(
      `DELETE FROM product WHERE id = '${productId}'`,
    );
    return result.affectedRows > 0;
  }
}