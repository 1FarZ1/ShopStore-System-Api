/* eslint-disable prettier/prettier */
import {  IsNumber, IsOptional, IsString } from 'class-validator';

export class QueryDto {
  @IsNumber()
  @IsOptional()
  page?: number;

  
  @IsNumber()
  @IsOptional()
  limit?: number;

  @IsString()
  @IsOptional()
  search?: string;
}
