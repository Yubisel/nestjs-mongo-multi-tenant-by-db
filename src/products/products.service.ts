import { Inject, Injectable } from '@nestjs/common';
// import { CreateProductDto } from './dto/create-product.dto';
// import { UpdateProductDto } from './dto/update-product.dto';
import { Model } from 'mongoose';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(@Inject('PRODUCT_MODEL') private productModel: Model<Product>) {}

  // async getTenantConnection(tenantId: string) {
  //   return this.connection.useDb(`nmmt_${tenantId}`);
  // }

  // async getProductModel(tenantId: string) {
  //   const tenantConnection = await this.getTenantConnection(tenantId);
  //   return tenantConnection.model(Product.name, ProductSchema);
  // }

  async create(createProductDto: any) {
    // const productModel = await this.productModel(tenantId);
    const product = new this.productModel(createProductDto);
    return product.save();
  }

  async findAll() {
    // const productModel = await this.getProductModel(tenantId);
    return this.productModel.find().exec();
  }
}
