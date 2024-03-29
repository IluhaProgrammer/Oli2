import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PrismaService } from './prisma/prisma.service';

async function bootstrap() {

  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api')
  app.enableCors({origin: 'https://olirewards.ru', credentials: true})

  await app.listen(3500);

}

bootstrap();
