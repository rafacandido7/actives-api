import { Global, Module } from '@nestjs/common'

import { PrismaService } from './prisma.service'

import { ActivesRepository } from './repositories/actives.repository'
import { DependenciesRepository } from './repositories/dependencies.repository'
import { UsersRepository } from './repositories/user.repository'
import { SupportCallRepository } from './repositories/support-call.repository'

@Global()
@Module({
  providers: [
    PrismaService,
    ActivesRepository,
    DependenciesRepository,
    SupportCallRepository,
    UsersRepository,
  ],
  exports: [
    ActivesRepository,
    DependenciesRepository,
    SupportCallRepository,
    UsersRepository,
  ],
})
export class DatabaseModule {}
