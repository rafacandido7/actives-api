import { Global, Module } from '@nestjs/common'

import { PrismaService } from './prisma.service'

import { UsersRepository } from './repositories/user.repository'
import { ActivesRepository } from './repositories/actives.repository'
import { DependenciesRepository } from './repositories/dependencies.repository'

@Global()
@Module({
  providers: [
    PrismaService,
    UsersRepository,
    ActivesRepository,
    DependenciesRepository,
  ],
  exports: [UsersRepository, ActivesRepository, DependenciesRepository],
})
export class DatabaseModule {}
