import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = app.get(ConfigService);
  await app.listen(config.get('app.port'), () => {
    console.log(
      `Server is running on http://localhost:${config.get('app.port')}`,
    );
  });
}
bootstrap();
