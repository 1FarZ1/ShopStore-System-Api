/* eslint-disable prettier/prettier */
import { DataSource } from 'typeorm';
import { Product } from './entity/product.entity';

export const productProvider = [
  {
    provide: 'PRODUCT_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Product),
    inject: ['DATA_SOURCE'],

  },
];
