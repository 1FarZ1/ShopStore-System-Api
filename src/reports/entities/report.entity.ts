import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'reports',
})
export class Report {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @Column()
  productId: number;

  @Column()
  comment: string;

  @Column()
  rate: number;
}
