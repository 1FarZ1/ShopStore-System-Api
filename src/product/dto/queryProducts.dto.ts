/* eslint-disable prettier/prettier */
import { Type } from 'class-transformer';
import {  IsNumber, IsOptional, IsString } from 'class-validator';


export class QueryDto {
  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  page?: number;

  
  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  limit?: number;

  @IsString()
  @IsOptional()
  search?: string;
}
