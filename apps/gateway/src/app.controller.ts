import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('service_1')
  createUser(@Body() body: any): void {
    return this.appService.newUser(body);
  }

  @Post('service_2')
  getProducts(@Body() body: any): void {
    return this.appService.newProduct(body);
  }
}
