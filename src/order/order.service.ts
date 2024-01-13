import { Inject, Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { OrderDto } from './dto/order.dto';
import { UsersService } from 'src/users/users.service';
import { ProductService } from 'src/product/product.service';

@Injectable()
export class OrderService {
  constructor(
    @Inject('DATA_SOURCE') private dataSource: DataSource,
    // inject user service
    private readonly userService: UsersService,
    private readonly productService: ProductService,
  ) {}
  async getAllOrdersForUser(userId: number): Promise<any> {
    return this.dataSource.query(`SELECT * FROM order WHERE user_id = ?`, [
      userId,
    ]);
  }

  async getOrderDetails(orderId: number): Promise<any> {
    return this.dataSource.query(`SELECT * FROM order WHERE order_id = ?`, [
      orderId,
    ]);
  }

  async getAllOrders(): Promise<any> {
    //RIGHT JOIN order_items ON orders.id = order_items.order_id
    const orders = await this.dataSource.query(`SELECT * FROM order`);
    return orders;
  }

  async getOrderItems(orderId: number): Promise<any> {
    const orderItems = await this.dataSource.query(
      `SELECT * FROM order_item LEFT JOIN product ON order_item.product_id = product.id WHERE order_id = ?`,
      [orderId],
    );
    return orderItems;
  }

  async createOrder(order: OrderDto, user_id: number): Promise<any> {
    const result = await this.userService.findOne(user_id);

    const myPromise = order.products.map(async (product) => {
      return await this.productService.getProductDetaills(product.productId);
    });

    const products = await Promise.all(myPromise);
    const username = result.user[0].name;

    // log them in a good way
    console.log('|||||| Create Order ||||||');
    console.log('username: ', username);
    console.log('products: ', products);

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
      `DELETE FROM order WHERE order_id = '${orderId}'`,
    );
  }
}
