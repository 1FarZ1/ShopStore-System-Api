/* eslint-disable prettier/prettier */
import { Inject, Injectable } from '@nestjs/common';
import { Product } from './product.entity';
import { Repository } from 'typeorm';


@Injectable()
export class ProductService {
  constructor(
    @Inject('PRODUCT_REPOSITORY')
    private productRepository: Repository<Product>,


  ) {}
  async getAllProducts(): Promise<Product[]> {
    return  this.productRepository.find(

    );
  }

  async  getProductDetaills(productId: string): Promise<Product>   {
    return this.productRepository.
    findOneBy({id: parseInt(productId, 10)})
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
    
    return this.productRepository.save(product);
  }
  // async updateProductDetaills(productId: string): Promise<Product> {
  //   return this.productRepository.findOne(productId);
    
  // }

  async deleteProduct(productId: string): Promise<boolean> {
    const result = await this.productRepository.delete(productId);
    return result.affected > 0;
  }
}