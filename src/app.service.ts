import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  hello(): any {
    return (
      '<h1>Welcome to the NestJS Test Api</h1>' +
      '<p>Visit <a href="/api">/api</a> to see the API</p>' +
      '<p>get all products  <a href="/products">Here</a</p>' +
      '<div style="background-color: #f1f1f1; padding: 20px;">'
    );
  }
}
