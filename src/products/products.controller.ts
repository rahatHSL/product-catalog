import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Query,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { RoleGuard } from 'src/role/role.guard';
import { QueryProductDto } from './dto/query-product.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}
  // admin routes
  @Post()
  @UseGuards(RoleGuard)
  async create(@Body() createProductDto: CreateProductDto) {
    return await this.productsService.create(createProductDto);
  }

  @Get()
  async find(@Query() queryProductDto: QueryProductDto) {
    return await this.productsService.find(queryProductDto);
  }

  // admin routes
  @Patch(':id')
  @UseGuards(RoleGuard)
  async update(
    @Param('id') id: string,
    @Body() updateProductDto: UpdateProductDto,
  ) {
    return await this.productsService.update(+id, updateProductDto);
  }

  // admin routes
  @Delete(':id')
  @UseGuards(RoleGuard)
  remove(@Param('id') id: string) {
    return this.productsService.remove(+id);
  }
}
