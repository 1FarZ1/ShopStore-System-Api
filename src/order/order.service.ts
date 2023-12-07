import { Inject, Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';

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

  async createOrder(
    userId: number,
    productId: number,
    quantity: number,
  ): Promise<any> {
    return this.dataSource.query(
      `INSERT INTO orders (user_id, product_id, quantity) VALUES (?, ?, ?)`,
      [userId, productId, quantity],
    );
  }

  async updateOrder(
    orderId: number,
    quantity: number,
    status: string,
  ): Promise<any> {
    return this.dataSource.query(
      `UPDATE orders SET quantity = '${quantity}', status = '${status}' WHERE order_id = '${orderId}'`,
    );
  }

  async deleteOrder(orderId: number): Promise<any> {
    return this.dataSource.query(
      `DELETE FROM orders WHERE order_id = '${orderId}'`,
    );
  }
}
