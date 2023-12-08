/* eslint-disable prettier/prettier */
import { DataSource } from 'typeorm';
import { User } from '../auth/entity/user.entity';
import { Product } from 'src/product/entity/product.entity';


export const databaseProviders = [
  { 
    provide: 'DATA_SOURCE',
    inject: [],
    useFactory: async () => {
      
      const dataSource = new DataSource({
        type: 'mysql',
        host: process.env.DB_HOST ,
        port:  parseInt(process.env.DB_PORT, 10) || 3000,
        username: process.env.DB_USERNAME,
        database: process.env.DB_NAME,
        password: process.env.DB_PASSWORD ,
        entities: [User,Product],
        synchronize: false,
      });
      


      return dataSource.initialize();
    },
  },
];

