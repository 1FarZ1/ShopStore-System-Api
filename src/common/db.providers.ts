/* eslint-disable prettier/prettier */
import { DataSource } from 'typeorm';
import { User } from '../auth/entity/user.entity';
import { Product } from 'src/product/entity/product.entity';
export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: '127.0.0.1',
        port: 3306,
        username: 'root',
        database: 'nestWorld',
        entities: [User,Product],
        synchronize: false,
      });
      


      return dataSource.initialize();
    },
  },
];

