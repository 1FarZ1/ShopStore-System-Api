/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {  IsNumber, IsOptional, IsString } from 'class-validator';


export class QueryDto {
  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  @ApiProperty(
    {
      description: 'page number',
      type: Number,
      default: 1
    }
  )
  page?: number;

  
  @IsNumber()
  @IsOptional()
  @Type(() => Number)

  @ApiProperty(
    {
      description: 'limit number',
      type: Number,
      default: 10
    }
  )
  limit?: number;

  @IsString()
  @IsOptional()

  @ApiProperty(
    {
      description: 'search string',
      type: String,
      default: 'search'
    }
  )
  search?: string;
}
