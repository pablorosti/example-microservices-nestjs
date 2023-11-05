import { NestFactory } from '@nestjs/core';
import { Service1Module } from './service1.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    Service1Module,
    {
      transport: Transport.TCP,
      options: {
        port: 8080,
      },
    },
  );
  await app.listen();
  console.log('Microservice 2 is live');
}
bootstrap();
