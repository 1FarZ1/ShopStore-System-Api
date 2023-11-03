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
        //TODO: move this to .env file
        host: 'bmlrstyprbhu5tvpykrk-mysql.services.clever-cloud.com',
        port: 3306,
        username: 'unjacdprzkbbkfjr',
        database: 'bmlrstyprbhu5tvpykrk',
        password:"J3VlqgVNGyvlXRswPKCg",
        entities: [User,Product],
        synchronize: false,
      });
      


      return dataSource.initialize();
    },
  },
];

