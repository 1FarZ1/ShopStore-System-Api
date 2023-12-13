/* eslint-disable prettier/prettier */
import {
  IsInt,
  IsString,
  IsArray,
  ValidateNested,
  IsDate,
} from 'class-validator';
import { Type } from 'class-transformer';

class ProductDto {
  @IsInt()
  productId: number;

  @IsInt()
  quantity: number;
}

export class OrderDto {
  @IsInt()
  id: number;

  @IsString()
  name: string;

  @IsString()
  status: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ProductDto)
  products: ProductDto[];

  @IsString()
  description: string;

  @IsDate()
  created_at: Date;

  @IsDate()
  updated_at: Date;

  @IsInt()
  user_id: number;
}
