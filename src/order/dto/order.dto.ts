/* eslint-disable prettier/prettier */
export class OrderDto {
  id: number;
  name: string;
  status: string;
  products: number[];
  description: string;
  created_at: Date;
  updated_at: Date;
  user_id: number;
}
