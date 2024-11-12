import { Injectable } from '@nestjs/common';
import { IsNumber, IsString } from 'class-validator';

@Injectable()
export class CreateProductDto {
  @IsString({ message: 'name required ' })
  name: string;

  @IsString({ message: "description can't be empty" })
  description: string;

  @IsNumber()
  price: number;

  @IsString()
  category: string;
}
