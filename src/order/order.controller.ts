import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Delete,
} from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderDto } from './dto/order.dto';

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

  //get order details
  @Get('/order/:orderId')
  async getOrderDetails(
    @Param('orderId', ParseIntPipe) orderId: number,
  ): Promise<any> {
    const order = await this.orderService.getOrderDetails(orderId);
    if (order) {
      return {
        id: orderId,
        message: 'order found',
        order: order,
      };
    }
  }

  //get all orders
  @Get('/orders')
  async getAllOrders(): Promise<any> {
    const orders = await this.orderService.getAllOrders();
    if (orders) {
      return {
        message: 'orders found',
        orders: orders,
      };
    }
  }

  @Delete('/order/:orderId')
  async deleteOrder(
    @Param('orderId', ParseIntPipe) orderId: number,
  ): Promise<any> {
    const result = await this.orderService.deleteOrder(orderId);
    if (result) {
      return {
        message: 'order deleted',
        result: result,
      };
    }
  }

  //create order
  @Post('/order')
  async createOrder(@Body() createOrderDto: OrderDto): Promise<any> {
    const result = await this.orderService.createOrder(createOrderDto);
    return {
      message: 'order created',
      result: result,
    };
  }

  //update order
//   @Put('/order/:orderId')
//   async updateOrder(
//     @Param('orderId', ParseIntPipe) orderId: number,
//     @Body() orderDto: OrderDto,
//   ): Promise<any> {
//     const result = await this.orderService.updateOrder(orderId, orderDto);
//     return {
//       message: 'order updated',
//       result: result,
//     };
//   }
}
