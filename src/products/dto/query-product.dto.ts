import { Injectable } from '@nestjs/common';
import { IsIn, IsOptional, IsString } from 'class-validator';

@Injectable()
export class QueryProductDto {
  @IsOptional()
  @IsString({ message: 'name required ' })
  name?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsString()
  price?: string;

  @IsOptional()
  @IsString()
  category?: string;

  @IsOptional()
  @IsString()
  limit?: string;

  @IsOptional()
  @IsString()
  page?: string;

  @IsOptional()
  @IsString()
  @IsIn(['name', 'price', 'category'])
  sort?: 'name' | 'price' | 'category';

  @IsOptional()
  @IsString()
  @IsIn(['DESC', 'ASC'])
  order?: 'DESC' | 'ASC';
}
