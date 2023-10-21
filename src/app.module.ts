import { Module } from '@nestjs/common';
import { ProductModule } from './product/product.module';
import { AuthModule } from './auth/auth.module';
import { databaseProviders } from './db.providers';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [ProductModule, AuthModule],
  controllers: [AppController],
  providers: [...databaseProviders, AppService],
  exports: [...databaseProviders],
})
export class AppModule {}
