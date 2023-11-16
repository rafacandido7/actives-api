import { Module } from '@nestjs/common'
import { ActivesService } from './actives.service'
import { ActivesController } from './actives.controller'
import { UsersService } from '../users/users.service'

@Module({
  controllers: [ActivesController],
  providers: [ActivesService, UsersService],
})
export class ActivesModule {}
