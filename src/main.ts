import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.setGlobalPrefix('/api');
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors();
  app.useLogger(['error', 'warn']);
  await app.listen(process.env.APP_PORT || 3000);
  console.log(`Application is on : https://bdd.onrender.com/api `);
}
bootstrap();
