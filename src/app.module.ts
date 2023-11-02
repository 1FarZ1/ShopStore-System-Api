import { Module } from '@nestjs/common';
// import { ProductModule } from './product/product.module';
// import { AuthModule } from './auth/auth.module';
// import { databaseProviders } from './common/db.providers';
// import { OrderModule } from './order/order.module';
import { AppController } from './app.controller';

@Module({
  // imports: [ProductModule, AuthModule, OrderModule],
  controllers: [AppController],
  // providers: [...databaseProviders],
  // exports: [...databaseProviders],
})
export class AppModule {}
