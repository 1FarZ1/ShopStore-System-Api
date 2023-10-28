/* eslint-disable prettier/prettier */
import { Inject, Injectable } from '@nestjs/common';
import { Product } from './entity/product.entity';
import { DataSource, Repository } from 'typeorm';


@Injectable()
export class ProductService {
  constructor(
    @Inject('PRODUCT_REPOSITORY')
    private productRepository: Repository<Product>,
    @Inject('DATA_SOURCE') private dataSource: DataSource,



  ) {}
  async getAllProducts(): Promise<Product[]> {
    // return  this.productRepository.find(// );
    return this.dataSource.query(
      `SELECT * FROM products`,
    );
  }

  async  getProductDetaills(productId: string): Promise<Product>   {
    // return this.productRepository.
    // findOneBy({id: parseInt(productId, 10)})
    // ;
    const product:Product = await this.dataSource.query(
      `SELECT * FROM products WHERE id = '${productId}'`,
    );
    return product;
  }

  async addProduct(
    name :string , price:number ,description:string,image:string 
  ): Promise<Product> {
    const product = new Product(
      
    );
    product.name = name;
    product.price = price;
    product.description = description;
    product.image = image;
    
    // return this.productRepository.save(product);
    const result : Product = await this.dataSource.query(
      `INSERT INTO products (name, price, description, image) VALUES ('${name}', '${price}', '${description}', '${image}') RETURNING *`,
    );
    return result[0];
  }
  // async updateProductDetaills(productId: string): Promise<Product> {
  //   return this.productRepository.findOne(productId);
    
  // }

  async deleteProduct(productId: string): Promise<boolean> {
    // const result = await this.productRepository.delete(productId);
    const result = await this.dataSource.query(
      `DELETE FROM products WHERE id = '${productId}'`,
    );
    return result.affected > 0;
  }
}