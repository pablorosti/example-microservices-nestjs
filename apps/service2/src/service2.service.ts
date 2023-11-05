import { Injectable } from '@nestjs/common';

@Injectable()
export class Service2Service {
  async createProduct(data: any) {
    console.log('Data from service 2', data);
    return {
      data,
    };
  }
}
