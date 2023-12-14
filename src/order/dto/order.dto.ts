/* eslint-disable prettier/prettier */
import {
  IsInt,

  IsArray,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

class ProductDto {
  @IsInt()
  productId: number;

  @IsInt()
  quantity: number;
}

export class OrderDto {

  // @IsString()
  // name: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ProductDto)
  products: ProductDto[];
}
