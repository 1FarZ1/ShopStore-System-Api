/* eslint-disable prettier/prettier */
import { Inject, Injectable } from '@nestjs/common';
import { Product } from './entity/product.entity';
import { DataSource, Repository } from 'typeorm';
import { ProductDto } from './dto/product_dto';


@Injectable()
export class ProductService {
  constructor(
    @Inject('PRODUCT_REPOSITORY')
    private productRepository: Repository<Product>,
    @Inject('DATA_SOURCE') private dataSource: DataSource,



  ) {}
  async getAllProducts(
    
      page = 1,
      pageSize = '10',
      search ,
    
  ): Promise<Product[]> {
    // return  this.productRepository.find(// );


    const offset = (page - 1) * Number.parseInt(pageSize);
    console.log(
      '🚀 ~ file: product.service.ts ~ line 66 ~ ProductService ~ getAllProducts ~ offset',
      offset,

    )

    console.log(
      '🚀 ~ file: product.service.ts ~ line 66 ~ ProductService ~ getAllProducts ~ pageSize',
      pageSize,
    );

    console.log(
      '🚀 ~ file: product.service.ts ~ line 66 ~ ProductService ~ getAllProducts ~ page',
      page,
    );
    
    
    
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

  async  getProductDetaills(productId: string): Promise<Product>   {
    // return this.productRepository.
    // findOneBy({id: parseInt(productId, 10)})
    // ;
    const product:Product = await this.dataSource.query(
      `SELECT * FROM product WHERE id = '${productId}'`,
    );
    return product;
  }

  async addProduct(
    productDto :ProductDto,
  ): Promise<Product> {
    // const product = new Product(
      
    // );
    // product.name = productDto.;
    // product.price = price;
    // product.description = description;
    // product.image = image;
    
    // return this.productRepository.save(product);
    const result : Product = await this.dataSource.query(
      `INSERT INTO product (name, price, description, image) VALUES ('${productDto.name}', '${productDto.price}', '${productDto.description}', '${productDto.image}') RETURNING *`,
    );
    return result[0];
  }
  // async updateProductDetaills(productId: string): Promise<Product> {
  //   return this.productRepository.findOne(productId);
    
  // }

  async deleteProduct(productId: string): Promise<boolean> {
    // const result = await this.productRepository.delete(productId);
    const result = await this.dataSource.query(
      `DELETE FROM product WHERE id = '${productId}'`,
    );
    return result.affected > 0;
  }
}