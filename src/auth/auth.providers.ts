/* eslint-disable prettier/prettier */
import { DataSource } from 'typeorm';
import { User } from './user.entity';
import { Product } from 'src/product/product.entity';
export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: 'localhost',
        port: 3000,
        username: 'root',
        password: 'root',
        database: 'test',
        entities: [User,Product],
        synchronize: false,
      });

      return dataSource.initialize();
    },
  },
];
