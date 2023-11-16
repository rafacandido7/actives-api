import { Global, Module } from '@nestjs/common'

import { PrismaService } from './prisma.service'

import { UsersRepository } from './repositories/user.repositories'
import { ActivesRepository } from './repositories/actives.repositories'

@Global()
@Module({
  providers: [PrismaService, UsersRepository, ActivesRepository],
  exports: [UsersRepository, ActivesRepository],
})
export class DatabaseModule {}
