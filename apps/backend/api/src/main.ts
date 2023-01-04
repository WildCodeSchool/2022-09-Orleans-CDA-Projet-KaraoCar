import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);

  const NODE_ENV = configService.get('NODE_ENV') || 'development';
  const PORT = configService.get('PORT') || 3000;

  app.setGlobalPrefix('api');

  Logger.log(
    `App is running at http://localhost:${PORT}/api in ${NODE_ENV} mode`,
    '🚀',
  );
  await app.listen(PORT);
}
bootstrap();
