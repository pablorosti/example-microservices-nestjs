import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'CREATE_USER',
        transport: Transport.TCP,
        options: {
          port: 8080,
        },
      },
      {
        name: 'CREATE_PRODUCT',
        transport: Transport.TCP,
        options: {
          port: 8081,
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
