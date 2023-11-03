import { Global, Module } from '@nestjs/common';
// import { ProductModule } from './product/product.module';
// import { AuthModule } from './auth/auth.module';
// import { databaseProviders } from './common/db.providers';
// import { OrderModule } from './order/order.module';
import { AppController } from './app.controller';
import { databaseProviders } from './common/db.providers';
import { AuthModule } from './auth/auth.module';
import { ProductModule } from './product/product.module';
import { OrderModule } from './order/order.module';

@Global()
@Module({
  imports: [ProductModule, AuthModule, OrderModule],
  controllers: [AppController],
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class AppModule {}
