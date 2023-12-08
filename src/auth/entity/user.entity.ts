/* eslint-disable prettier/prettier */
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Report } from '../../reports/entities/report.entity'; 



export enum Role {
  ADMIN = 'admin',
  USER  = 'user',
}
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

    // role
    @Column({ type: 'enum', enum: Role, default: Role.USER,
    nullable: false,
  transformer: {
    to: (entityValue: Role) => entityValue,
    from: (databaseValue: string) => Role[databaseValue],
  },

   })
    role: Role;

    @OneToMany(() => Report, (report) => report.user)
    reports: Report[];
    


  
}
