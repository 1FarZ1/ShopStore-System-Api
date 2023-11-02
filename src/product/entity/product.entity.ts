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

  @Column({ nullable:false,  })
  rating: number;

  @Column({ nullable:false,  })
  stock: number;

  @Column({ length: 20 })
  brand: string;

  @Column({ length: 20 })
  category: string;


}