/* eslint-disable prettier/prettier */
import { BadRequestException, Inject, Injectable, InternalServerErrorException } from '@nestjs/common';
import { Product } from './entity/product.entity';
import { DataSource } from 'typeorm';
import { ProductDto } from './dto/product.dto';
import { EditProductDto } from './dto/edit-product.dto';


@Injectable()
export class ProductService {
  constructor(
    // @Inject('PRODUCT_REPOSITORY')
    // private productRepository: Repository<Product>,
    @Inject('DATA_SOURCE') private dataSource: DataSource,



  ) { }
  async getAllProducts(

    page = 1,
    pageSize = 10,
    search,

  ): Promise<Product[]> {
    const offset = (page - 1) * pageSize;

    // console.log(typeof pageSize);
    // console.log(typeof offset);
    // console.log(typeof page);

    if (search) {
      search = search.trim();
     


      return this.dataSource.query(
        `SELECT * FROM product WHERE name LIKE '%${search}%' LIMIT ? OFFSET ?`,
        [pageSize, offset]

      );
    }
    return this.dataSource.query(
      `SELECT * FROM product LIMIT ? OFFSET ?`,
      [pageSize, offset]

    );
  }

  async getProductDetaills(productId: number): Promise<Product> {
    const products: Product[] = await this.dataSource.query(
      `SELECT * FROM product WHERE id = '${productId}'`,
    );
    return products[0];
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
  ): Promise<Product> {
    const result: Product = await this.dataSource.query(
      `INSERT INTO product (name,price,description,image,rating,stock,brand,category) VALUES ('${productDto.name}','${productDto.price}','${productDto.description}','${productDto.image}','${productDto.rating}','${productDto.stock}','${productDto.brand}','${productDto.category}')`,
    );
    return result[0];
  }

  async deleteProduct(productId: number): Promise<boolean> {
    const result  = await this.dataSource.query(
      `DELETE FROM product WHERE id = '${productId}'`,
    );
    return result.affectedRows > 0;
  }
}