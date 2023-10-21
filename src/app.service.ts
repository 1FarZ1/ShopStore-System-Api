/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  hello(): any {
    return ' <div style="text-align:center"> <h1>Welcome to NestJS</h1> <h2> <a href="/products">Products</a> </h2> </div> ';
  }
}
