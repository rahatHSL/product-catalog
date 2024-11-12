import { Injectable } from '@nestjs/common';
import { IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

@Injectable()
export class CreateProductDto {
  @ApiProperty({ example: 'Apple watch', description: 'Product name' })
  @IsString({ message: 'name required ' })
  name: string;

  @ApiProperty({
    example: 'watch description',
    description: 'Product description',
  })
  @IsString({ message: "description can't be empty" })
  description: string;

  @ApiProperty({ example: '100', description: 'Product price' })
  @IsNumber()
  price: number;

  @ApiProperty({ example: 'watch', description: 'Product category' })
  @IsString()
  category: string;
}
