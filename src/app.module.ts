import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { dbConfig } from './config/db.config';
import { ProductsModule } from './products/products.module';
import { TenantsModule } from './tenants/tenants.module';

@Module({
  imports: [
    // Import the ConfigModule
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      load: [dbConfig],
    }),
    ProductsModule,
    TenantsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
