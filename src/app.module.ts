import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { dbConfig } from './config/db.config';

@Module({
  imports: [
    // Import the ConfigModule
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      load: [dbConfig],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
