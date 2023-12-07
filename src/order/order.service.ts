import { Inject, Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { OrderDto } from './dto/order.dto';

@Injectable()
export class OrderService {
  constructor(@Inject('DATA_SOURCE') private dataSource: DataSource) {}

  async getAllOrdersForUser(userId: number): Promise<any> {
    return this.dataSource.query(`SELECT * FROM orders WHERE user_id = ?`, [
      userId,
    ]);
  }

  async getOrderDetails(orderId: number): Promise<any> {
    return this.dataSource.query(`SELECT * FROM orders WHERE order_id = ?`, [
      orderId,
    ]);
  }

  async getAllOrders(): Promise<any> {
    return this.dataSource.query(`SELECT * FROM orders`);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async createOrder(order: OrderDto): Promise<any> {
    // return this.dataSource.query(
    //   `INSERT INTO orders (user_id, products) VALUES (?, ?, ?)`,
    //   [order.userId, order.products, order.quantity],
    // );
    return null;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async updateOrder(orderId: number, order: OrderDto): Promise<any> {
    // return this.dataSource.query(
    //   `UPDATE orders SET quantity = '${quantity}', status = '${status}' WHERE order_id = '${orderId}'`,
    // );
    return null;
  }

  async deleteOrder(orderId: number): Promise<any> {
    return this.dataSource.query(
      `DELETE FROM orders WHERE order_id = '${orderId}'`,
    );
  }
}
