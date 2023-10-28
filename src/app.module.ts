import { Module } from '@nestjs/common';
import { ProductModule } from './product/product.module';
import { AuthModule } from './auth/auth.module';
import { databaseProviders } from './common/db.providers';

@Module({
  imports: [ProductModule, AuthModule],
  controllers: [],
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class AppModule {}
