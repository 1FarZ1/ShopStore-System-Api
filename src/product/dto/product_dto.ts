/* eslint-disable prettier/prettier */
import {  IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class ProductDto {
    @IsNotEmpty()
    @IsString()
    name: string;
    
    @IsNotEmpty()
    @IsNumber()
    price: number;
    
    @IsNotEmpty()
    @IsString()
    description: string;
    
    @IsNotEmpty()
    @IsString()
    image: string;

    @IsNotEmpty()
    @IsNumber()
    rating: number;

    @IsNotEmpty()
    @IsNumber()
    stock: number;

    @IsNotEmpty()
    @IsString()
    brand: string;

    @IsNotEmpty()
    @IsString()
    category: string;
}
