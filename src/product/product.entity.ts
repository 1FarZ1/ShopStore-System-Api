/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

Entity();
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 20 })
  name: string;
  
    @Column({ length: 40 ,unique:true, nullable:false,  })
    description: string;
    
    @Column({ length: 20 , nullable:false,  })
    price: string;

    @Column({ nullable:true,  })
    image: string;


  
}