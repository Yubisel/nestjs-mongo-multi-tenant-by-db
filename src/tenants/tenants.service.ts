import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Tenant } from './entities/tenant.entity';
import { Model } from 'mongoose';
import { CreateTenantDto } from './dto/create-tenant.dto';
// import { UpdateTenantDto } from './dto/update-tenant.dto';

@Injectable()
export class TenantsService {
  constructor(
    @InjectModel(Tenant.name) private readonly tenantModel: Model<Tenant>,
  ) {}

  async getTenantById(tenantId: string): Promise<Tenant> {
    return this.tenantModel.findOne({ tenantId }).exec();
  }

  async create(createTenantDto: CreateTenantDto) {
    return this.tenantModel.create(createTenantDto);
  }

  // findAll() {
  //   return `This action returns all tenants`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} tenant`;
  // }

  // update(id: number, updateTenantDto: UpdateTenantDto) {
  //   return `This action updates a #${id} tenant`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} tenant`;
  // }
}
