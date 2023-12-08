/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import {IsNumber, IsOptional, IsString } from 'class-validator';

export class EditProductDto {
    @IsString()
    @IsOptional()
    @ApiProperty(
        {
            description: 'product name',
            type: String,
            default: 'name'
        }
    )
    name?: string;
    
    @IsNumber()
    @IsOptional()

    @ApiProperty(
        {
            description: 'product price',
            type: Number,
            default: 0
        }
    )
    price?: number;
    
    @IsString()
    @IsOptional()

    @ApiProperty(
        {
            description: 'product description',
            type: String,
            default: 'description'
        }
    )
    description?: string;
    
    @IsString()
    @IsOptional()

    @ApiProperty(
        {
            description: 'product image',
            type: String,
            default: 'image'
        }
    )
    image?: string;

    @IsNumber()
    @IsOptional()

    @ApiProperty(
        {
            description: 'product rating',
            type: Number,
            default: 0
        }
    )
    rating?: number;

    @IsNumber()
    @IsOptional()

    @ApiProperty(
        {
            description: 'product stock',
            type: Number,
            default: 0
        }
    )
    stock?: number;

    @IsString()
    @IsOptional()

    @ApiProperty(
        {
            description: 'product brand',
            type: String,
            default: 'brand'
        }
    )
    brand?: string;

    @IsString()
    @IsOptional()

    @ApiProperty(
        {
            description: 'product category',
            type: String,
            default: 'category'
        }
    )
    category?: string;
}
