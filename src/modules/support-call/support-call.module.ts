import { Module } from '@nestjs/common'
import { SupportCallService } from './support-call.service'
import { SupportCallController } from './support-call.controller'
import { ActivesModule } from '../actives/actives.module'
import { DependenciesModule } from '../dependencies/dependencies.module'

@Module({
  controllers: [SupportCallController],
  providers: [SupportCallService],
  imports: [ActivesModule, DependenciesModule],
})
export class SupportCallModule {}
