/* eslint-disable @typescript-eslint/no-unused-vars */
import { Controller, Get, Response, Request, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  hello(): any {
    return this.appService.hello();
  }
}
