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



  ) {}
  async getAllProducts(
    
      page = 1,
      pageSize = '10',
      search ,
    
  ): Promise<Product[]> {
    // return  this.productRepository.find(// );


    const offset = (page - 1) * Number.parseInt(pageSize);
   

    
    
    
    if(search){
      search = search.trim();

      return this.dataSource.query(
        `SELECT * FROM product WHERE name LIKE '%${search}%' LIMIT ? OFFSET ?`,
        [Number.parseInt(pageSize), offset]
  
      );
    }
    return this.dataSource.query(
      `SELECT * FROM product LIMIT ? OFFSET ?`,
      [Number.parseInt(pageSize), offset]

    );
  }

  async  getProductDetaills(productId: number): Promise<Product>   {
    // return this.productRepository.
    // findOneBy({id: parseInt(productId, 10)})
    // ;
    const product:Product = await this.dataSource.query(
      `SELECT * FROM product WHERE id = '${productId}'`,
    );
    return product;
  }

  async updateProductDetaills(
    productId: number,
    productDto :EditProductDto,
  ): Promise<Product> {
    try {

      //check whethere there is new data or not
      const product:Product = await this.dataSource.query(
        `SELECT * FROM product WHERE id = '${productId}'`,
      );
      if(!product){
        throw new BadRequestException(
          'Product not found with this id ${productId}',
        )

      }
      if(!productDto.name && !productDto.price && !productDto.description && !productDto.image && !productDto.rating && !productDto.stock && !productDto.brand && !productDto.category){  
        throw new BadRequestException(
          'No data to update',
        )
      }

      // const result : Product = await this.dataSource.query(
      //   `UPDATE product SET name = '${productDto.name}',price = '${productDto.price}',description = '${productDto.description}',image = '${productDto.image}',rating = '${productDto.rating}',stock = '${productDto.stock}',brand = '${productDto.brand}',category = '${productDto.category}' WHERE id = '${productId}'`,
      // );
      // do a for loop in fields instead
      let query = `UPDATE product SET `;
      if(productDto.name){
        query += `name = '${productDto.name}',`;
      }
      if(productDto.price){
        query += `price = '${productDto.price}',`;
      }
      if(productDto.description){
        query += `description = '${productDto.description}',`;
      }
      if(productDto.image){
        query += `image = '${productDto.image}',`;
      }
      if(productDto.rating){
        query += `rating = '${productDto.rating}',`;
      }
      if(productDto.stock){
        query += `stock = '${productDto.stock}',`;
      }
      if(productDto.brand){
        query += `brand = '${productDto.brand}',`;
      }
      if(productDto.category){
        query += `category = '${productDto.category}',`;
      }
      query = query.substr(0, query.length - 1);
      query += ` WHERE id = '${productId}'`;
      const result : Product = await this.dataSource.query(
        query,
      );

      return result[0];
    } catch (error) {
        throw new InternalServerErrorException(error.message);
    }
    }

  async addProduct(
    productDto :ProductDto,
  ): Promise<Product> {
    // return this.productRepository.save(product);
    const result : Product = await this.dataSource.query(
      `INSERT INTO product (name,price,description,image,rating,stock,brand,category) VALUES ('${productDto.name}','${productDto.price}','${productDto.description}','${productDto.image}','${productDto.rating}','${productDto.stock}','${productDto.brand}','${productDto.category}')`,
    );
    return result[0];
  }
  // async updateProductDetaills(productId: string): Promise<Product> {
  //   return this.productRepository.findOne(productId);
    
  // }

  async deleteProduct(productId: number): Promise<boolean> {
    // const result = await this.productRepository.delete(productId);
    const result = await this.dataSource.query(
      `DELETE FROM product WHERE id = '${productId}'`,
    );
    return result.affected > 0;
  }
}