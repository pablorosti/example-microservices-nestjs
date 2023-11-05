import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(
    @Inject('CREATE_USER') private user: ClientProxy,
    @Inject('CREATE_PRODUCT') private product: ClientProxy,
  ) {}

  newUser(data: any) {
    this.user.emit('service_1', data);
  }

  newProduct(data: any) {
    this.product.emit('service_2', data);
  }
}
