import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { dbConfig } from './config/db.config';
import { ProductsModule } from './products/products.module';
import { TenantsModule } from './tenants/tenants.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    // Import the ConfigModule
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      load: [dbConfig],
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('db.uri'),
      }),
      inject: [ConfigService],
    }),
    ProductsModule,
    TenantsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
