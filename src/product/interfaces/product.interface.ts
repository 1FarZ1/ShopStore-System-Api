/* eslint-disable prettier/prettier */
export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  image: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}
