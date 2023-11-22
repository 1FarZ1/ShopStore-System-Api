/* eslint-disable prettier/prettier */
export class OrderDto {
  id: number;
  name: string;
  status: string;
  description: string;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date;
  user_id: number;
}
