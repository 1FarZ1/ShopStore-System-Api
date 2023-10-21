/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity(
  {
    name: 'product',
  },
)
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 20 })
  name: string;
  
  @Column({ length: 40 ,unique:true, nullable:false,  })
  description: string;
    
  @Column({nullable:false,  })
  price: number;

  @Column({ nullable:true,  })
  image: string;


  
}