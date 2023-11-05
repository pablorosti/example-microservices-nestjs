import { Controller } from '@nestjs/common';
import { Service2Service } from './service2.service';
import { EventPattern } from '@nestjs/microservices';

@Controller()
export class Service2Controller {
  constructor(private readonly service2Service: Service2Service) {}

  @EventPattern('service_2')
  async handleUserCreated(data: any) {
    return this.service2Service.createProduct(data);
  }
}
