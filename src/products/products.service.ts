import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { FindManyOptions, FindOptionsWhere, ILike, Repository } from 'typeorm';
import { QueryProductDto } from './dto/query-product.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private ProductRepository: Repository<Product>,
  ) {}

  async create(createProductDto: CreateProductDto) {
    const product = await this.ProductRepository.save({
      ...createProductDto,
    });
    return product;
  }

  async find(query: QueryProductDto) {
    const where: FindOptionsWhere<Product> = {};
    const options: FindManyOptions<Product> = {};
    if (query.name) {
      where.name = ILike(`%${query.name}%`);
    }
    if (query.description) {
      where.description = ILike(`%${query.description}%`);
    }
    if (query.price) {
      where.price = +query.price;
    }
    if (query.category) {
      where.category = query.category;
    }

    if (query.order && query.order) {
      options.order = {
        [query.sort]: query.order,
      };
    }

    if (query.page && query.limit) {
      options.take = +query.limit;
      options.skip = (+query.page - 1) * +query.limit;
    }

    return await this.ProductRepository.find({
      where,
      ...options,
    });
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    const product = await this.ProductRepository.findOneBy({ id });

    if (!product) {
      throw new BadRequestException('product not found');
    }
    return await this.ProductRepository.save({
      ...product,
      ...updateProductDto,
      updatedAt: new Date(),
    });
  }

  async remove(id: number) {
    const deleted = await this.ProductRepository.delete({ id });
    if (deleted.affected >= 1) {
      return { message: 'success' };
    }
    throw new BadRequestException('product does not exist');
  }
}
