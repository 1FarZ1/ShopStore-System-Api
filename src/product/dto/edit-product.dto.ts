/* eslint-disable prettier/prettier */
import {IsNumber, IsOptional, IsString } from 'class-validator';

export class EditProductDto {
    @IsString()
    @IsOptional()
    name?: string;
    
    @IsNumber()
    @IsOptional()
    price?: number;
    
    @IsString()
    @IsOptional()
    description?: string;
    
    @IsString()
    @IsOptional()
    image?: string;

    @IsNumber()
    @IsOptional()
    rating?: number;

    @IsNumber()
    @IsOptional()
    stock?: number;

    @IsString()
    @IsOptional()
    brand?: string;

    @IsString()
    @IsOptional()
    category?: string;
}
