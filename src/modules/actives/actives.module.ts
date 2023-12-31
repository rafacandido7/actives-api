import { Module } from '@nestjs/common'

import { ActivesService } from './actives.service'

import { ActivesController } from './actives.controller'

@Module({
  controllers: [ActivesController],
  providers: [ActivesService],
  exports: [ActivesService],
})
export class ActivesModule {}
