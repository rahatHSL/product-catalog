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
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
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
  @ApiOperation({ summary: 'Create a new product' })
  @ApiResponse({
    status: 201,
    description: 'Return the newly created product details.',
  })
  @ApiResponse({
    status: 403,
    description:
      'Forbidden. should add request headers (role: admin). in production use authentication. like JWT, OAuth, etc.',
  })
  async create(@Body() createProductDto: CreateProductDto) {
    return await this.productsService.create(createProductDto);
  }

  @ApiOperation({ summary: 'Get products with pagination based on query' })
  @ApiResponse({
    status: 200,
    description: 'Return the list of products.',
  })
  @ApiResponse({
    status: 400,
    description: 'Bad request. Invalid query parameters.',
  })
  @Get()
  async find(@Query() queryProductDto: QueryProductDto) {
    return await this.productsService.find(queryProductDto);
  }

  @ApiOperation({ summary: 'Get a product' })
  @ApiResponse({
    status: 200,
    description: 'Return the product.',
  })
  @ApiResponse({
    status: 400,
    description: 'Product not found.',
  })
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.productsService.findOne(id);
  }

  // admin routes
  @ApiOperation({ summary: 'Update a product' })
  @ApiResponse({
    status: 200,
    description: 'Return the updated product details.',
  })
  @ApiResponse({
    status: 403,
    description:
      'Forbidden. should add request headers (role: admin). in production use authentication. like JWT, OAuth, etc.',
  })
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
  @ApiOperation({ summary: 'Delete a product' })
  @ApiResponse({
    status: 200,
    description: 'return success message.',
  })
  @ApiResponse({
    status: 403,
    description:
      'Forbidden. should add request headers (role: admin). in production use authentication. like JWT, OAuth, etc.',
  })
  remove(@Param('id') id: string) {
    return this.productsService.remove(+id);
  }
}
