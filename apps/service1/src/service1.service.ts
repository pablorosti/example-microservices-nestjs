import { Injectable } from '@nestjs/common';

@Injectable()
export class Service1Service {
  async createUser(data: any) {
    console.log('Data from service 1', data);
    return {
      data,
    };
  }
}
