import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Delete,
  UseGuards,
  Req,
} from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderDto } from './dto/order.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { RolesGuard } from 'src/common/roles.guard';
import { Role } from 'src/auth/entity/user.entity';
import { Roles } from 'src/common/roles.decorator';
import { ApiBearerAuth } from '@nestjs/swagger';

@Controller('orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Get('/')
  @ApiBearerAuth()
  // @Roles(Role.ADMIN)
  // @UseGuards(RolesGuard)
  // @UseGuards(AuthGuard)
  async getAllOrders(): Promise<any> {
    const orders = await this.orderService.getAllOrders();
    if (orders) {
      return {
        message: 'orders found',
        orders: orders,
      };
    }
  }
  @Get('/me')
  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  async getAllOrdersForMe(@Req() req): Promise<any> {
    const orders = await this.orderService.getAllOrdersForUser(
      req.user.user_id,
    );
    if (orders) {
      return {
        id: req.user.user_id,
        message: 'orders found',
        orders: orders,
      };
    }
  }

  @Get('/:userId')
  @ApiBearerAuth()
  // @Roles(Role.ADMIN)
  // @UseGuards(RolesGuard)
  @UseGuards(AuthGuard)
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
  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  async getOrderDetails(
    @Req() req,
    @Param('orderId', ParseIntPipe) orderId: number,
  ): Promise<any> {
    const order = await this.orderService.getOrderDetails(
      orderId,
      req.user.user_id,
    );
    if (order) {
      return {
        id: orderId,
        message: 'order found',
        order: order,
      };
    }
  }

  // @Get('/order/:orderId/items')
  // @ApiBearerAuth()
  // @UseGuards(AuthGuard)
  // //get order items
  // async getOrderItems(
  //   @Param('orderId', ParseIntPipe) orderId: number,
  // ): Promise<any> {
  //   const orderItems = await this.orderService.getOrderItems(orderId);
  //   if (orderItems) {
  //     return {
  //       id: orderId,
  //       message: 'order items found',
  //       orderItems: orderItems,
  //     };
  //   }
  // }

  @Delete('/order/:orderId')
  @ApiBearerAuth()
  @Roles(Role.ADMIN)
  @UseGuards(RolesGuard)
  @UseGuards(AuthGuard)
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

  @Post('/new')
  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  async createOrder(
    @Body() createOrderDto: OrderDto,
    @Req() req,
  ): Promise<any> {
    const result = await this.orderService.createOrder(
      createOrderDto,
      req.user.user_id,
    );
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
