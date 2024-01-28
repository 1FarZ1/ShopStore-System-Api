/* eslint-disable prettier/prettier */
import { DataSource } from 'typeorm';
import { User } from '../auth/entity/user.entity';
import { Product } from 'src/product/entity/product.entity';
import { Order } from 'src/order/entity/order.entity';
import { Report } from 'src/reports/entities/report.entity';


export const databaseProviders = [
  { 
    provide: 'DATA_SOURCE',
    inject: [],
    useFactory: async () => {
      
      const dataSource = new DataSource({
        type: 'mysql',
        host: process.env.DB_HOST,
        port:  parseInt(process.env.DB_PORT, 10) || 3000,
        username: process.env.DB_USERNAME,
        database: process.env.DB_NAME,
        password: process.env.DB_PASSWORD ,
        entities: [User,Product,Report,Order],
       //  migrations: ['./migrations/*.js'],
        synchronize: false,
      });
      
      const connection = await dataSource.initialize();
        


      return connection;
    },
  },
];

