import 'dotenv/config'

import { NestFactory } from '@nestjs/core'
import { ValidationPipe } from '@nestjs/common'

import { AppModule } from './app.module'

import { env } from './shared/config/env'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  app.useGlobalPipes(new ValidationPipe())

  const config = new DocumentBuilder()
    .setTitle('Actives API')
    .setDescription(
      'The Actives API offers comprehensive functionalities for administering technological assets in an Information Technology environment. Designed to facilitate efficient control of hardware, software, and other essential resources, the API provides a flexible and secure interface for performing essential asset management operations.',
    )
    .setVersion('1.0')
    .addTag('Auth')
    .addTag('Actives')
    .addTag('users')
    .addTag('Dependency')
    .build()
  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('docs', app, document)

  await app.listen(env.apiPort)
}

bootstrap()
