/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity(
  {
    name: 'users',
  },
)
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 20 })
  name: string;
  
    @Column({ length: 20 ,unique:true, nullable:false,  })
    email: string;
    
    @Column({ length: 20 , nullable:false,  })
    password: string;

    @Column({ nullable:true,  })
    image: string;


  
}
