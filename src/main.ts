import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from "@nestjs/common";
import { EntityNotFoundInterceptor } from './interceptors/entity-not-found.interceptors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);


  // Pipes
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true, //permite trabalhar com parâmetros de rota, obedecento o tipo que for passado no controller.
      whitelist: true,
      forbidNonWhitelisted: true,
    })
  );

  // Interceptor
  app.useGlobalInterceptors(new EntityNotFoundInterceptor());

  await app.listen(3000);
}
bootstrap();
