import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import { MyLoggerModule } from './my-logger/my-logger.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // const app = await NestFactory.create(AppModule, {
  //   bufferLogs: true,
  // });
  // app.useLogger(app.get(MyLoggerModule));
  app.enableCors();
  app.setGlobalPrefix('api');
  await app.listen(3001);
}
bootstrap();
