import { NestFactory } from '@nestjs/core';
import { Service2Module } from './service2.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    Service2Module,
    {
      transport: Transport.TCP,
      options: { port: 8081 },
    },
  );
  await app.listen();
  console.log('Microservice 3 is live');
}
bootstrap();
