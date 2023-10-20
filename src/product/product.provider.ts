/* eslint-disable prettier/prettier */
import { DataSource } from 'typeorm';
import { Product } from './product.entity';

export const productProvider = [
  {
    provide: 'PRODUCT_REPOSITORT',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Product),
    inject: ['DATA_SOURCE'],

  },
];
