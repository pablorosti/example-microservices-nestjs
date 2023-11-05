import { Controller } from '@nestjs/common';
import { Service1Service } from './service1.service';
import { EventPattern } from '@nestjs/microservices';

@Controller()
export class Service1Controller {
  constructor(private readonly service1Service: Service1Service) {}

  @EventPattern('service_1')
  async handleUserCreated(data: any) {
    return this.service1Service.createUser(data);
  }
}
