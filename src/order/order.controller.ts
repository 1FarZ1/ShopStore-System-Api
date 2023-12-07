import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { OrderService } from './order.service';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  //get all orders for a specific user
  @Get('/orders/:userId')
  async getAllOrdersForUser(
    @Param('userId', ParseIntPipe) userId: number,
  ): Promise<any> {
    const orders = await this.orderService.getAllOrdersForUser(userId);
    if (orders) {
      return {
        id: userId,
        message: 'orders found',
        orders: orders,
      };
    }
  }
}
