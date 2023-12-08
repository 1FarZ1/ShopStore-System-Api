/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import {  IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class ProductDto {
    @IsNotEmpty()
    @IsString()
    @ApiProperty(
        {
            description: 'name of the product',
            type: String,
            default: 'product name',
        }
    )
    name: string;
    
    @IsNotEmpty()
    @IsNumber()
    @ApiProperty(
        {
            description: 'price of the product',
            type: Number,
            default: 0,
        }
    )
    price: number;
    
    @IsNotEmpty()
    @IsString()

    @ApiProperty(
        {
            description: 'description of the product',
            type: String,
            default: 'product description',
        }
    )
    description: string;
    
    @IsNotEmpty()
    @IsString()

    @ApiProperty(
        {
            description: 'image of the product',
            type: String,
            default: 'product image',
        }
    )
    image: string;

    @IsNotEmpty()
    @IsNumber()

    @ApiProperty(
        {
            description: 'rating of the product',
            type: Number,
            default: 0,
        }
    )
    rating: number;

    @IsNotEmpty()
    @IsNumber()

    @ApiProperty(
        {
            description: 'stock of the product',
            type: Number,
            default: 0,
        }
    )
    stock: number;

    @IsNotEmpty()
    @IsString()

    @ApiProperty(
        {
            description: 'brand of the product',
            type: String,
            default: 'product brand',
        }
    )
    brand: string;

    @IsNotEmpty()
    @IsString()

    @ApiProperty(
        {
            description: 'category of the product',
            type: String,
            default: 'product category',
        }
    )
    category: string;
}
