import { Injectable } from '@nestjs/common';
// import { CreateProductDto } from './dto/create-product.dto';
// import { UpdateProductDto } from './dto/update-product.dto';
import { InjectConnection } from '@nestjs/mongoose';
import { Connection } from 'mongoose';
import { Product, ProductSchema } from './entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(@InjectConnection() private connection: Connection) {}

  async getTenantConnection(tenantId: string) {
    return this.connection.useDb(`nmmt_${tenantId}`);
  }

  async getProductModel(tenantId: string) {
    const tenantConnection = await this.getTenantConnection(tenantId);
    return tenantConnection.model(Product.name, ProductSchema);
  }

  async create(tenantId: string, createProductDto: any) {
    const productModel = await this.getProductModel(tenantId);
    const product = new productModel(createProductDto);
    return product.save();
  }

  async findAll(tenantId: string) {
    const productModel = await this.getProductModel(tenantId);
    return productModel.find().exec();
  }
}
