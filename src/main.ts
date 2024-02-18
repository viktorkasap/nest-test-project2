import * as process from 'process';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function start() {
  const PORT = process.env.PORT || 5001;
  const app = await NestFactory.create(AppModule);

  /* SWAGGER */
  const config = new DocumentBuilder()
    .setTitle('Nest Test Project API')
    .setDescription('Documentation API')
    .setVersion('1.0.0')
    .addTag('Nest')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api/docs', app, document);

  await app.listen(PORT, () =>
    console.log(`🚀 Server started on port ${PORT}`),
  );
}

start();
