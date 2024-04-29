import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Tenant {
  @Prop({ required: true })
  companyName: string;
  @Prop({ required: true, unique: true })
  tenantId: string;
  // subdomain: string;
  // isActive: boolean;
}

export const TenantSchema = SchemaFactory.createForClass(Tenant);
