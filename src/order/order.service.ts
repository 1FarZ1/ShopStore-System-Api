import {
  ForbiddenException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { DataSource } from 'typeorm';
import { OrderDto } from './dto/order.dto';
import { UsersService } from 'src/users/users.service';
import { ProductService } from 'src/product/product.service';
import { Order } from './entity/order.entity';

@Injectable()
export class OrderService {
  constructor(
    @Inject('DATA_SOURCE') private dataSource: DataSource,
    private readonly userService: UsersService,
    private readonly productService: ProductService,
  ) {}
  async getAllOrdersForUser(userId: number): Promise<any> {
    return this.dataSource.query('SELECT * FROM `order` WHERE user_id = ?', [
      userId,
    ]);
  }

  async getOrderDetails(orderId: number): Promise<any> {
    // const canSee = await this.orderBelongsToUser(orderId, user_id);

    // if (!canSee) {
    //   throw new ForbiddenException(
    //     'You are not allowed to see this order details',
    //   );
    // }

    const order = await this.dataSource.query(
      'SELECT * FROM `order` WHERE id = ?',
      [orderId],
    );

    if (order.length === 0) {
      throw new NotFoundException('Order with the provided id does not exist');
    }
    //get order items
    const orderItems = await this.getOrderItems(orderId);

    return {
      ...order[0],
      orderItems,
    };
  }

  async orderBelongsToUser(orderId: number, user_id: number): Promise<any> {
    const order = await this.dataSource.query(
      'SELECT * FROM `order` WHERE id = ? AND user_id = ?',
      [orderId, user_id],
    );

    if (order.length === 0) {
      return false;
    }
    return true;
  }

  async getAllOrders(): Promise<any> {
    //join user table to get user details
    const orders = await this.dataSource.query(
      `SELECT
      \`order\`.id,
      \`order\`.totalPrice,
      \`order\`.createdAt,
      \`order\`.updatedAt,
      user.id AS userId,
      user.name AS userName,
      user.email AS userEmail 
      FROM \`order\` LEFT JOIN user ON \`order\`.user_id = user.id`,
    );

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
    const username = result.user.name;

    console.log('-------------------- CREATE ORDER -------------------- ');
    console.log('username: ', username);
    console.log('products: ', products);
    const orderItems = products.map((product) => {
      return {
        productId: product.id,
        quantity: order.products
          .filter((item) => item.productId === product.id)
          .map((item) => item.quantity)[0],
        price: product.price,
      };
    });

    const totalPrice = orderItems.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);

    const orderPromise = await this.dataSource.query(
      `INSERT INTO \`order\` (user_id, totalPrice) VALUES (?, ?)`,
      [user_id, totalPrice],
    );

    const orderId = orderPromise.insertId;

    orderItems.map(async (item) => {
      await this.dataSource.query(
        `INSERT INTO order_item (order_id, product_id, quantity, price) VALUES (?, ?, ?, ?)`,
        [orderId, item.productId, item.quantity, item.price],
      );
    });

    const orderDetails = await this.getOrderDetails(orderId);
    return orderDetails;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async updateOrder(orderId: number, order: OrderDto): Promise<any> {
    const quantity = 0;
    const status = 'pending';
    return this.dataSource.query(
      `UPDATE orders SET quantity = '${quantity}', status = '${status}' WHERE order_id = '${orderId}'`,
    );
  }

  async deleteOrder(orderId: number): Promise<any> {
    return this.dataSource.query(
      `DELETE FROM order WHERE order_id = '${orderId}'`,
    );
  }
}
