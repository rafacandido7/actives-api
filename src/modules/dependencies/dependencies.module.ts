import { Module } from '@nestjs/common'
import { DependenciesService } from './dependencies.service'
import { DependenciesController } from './dependencies.controller'
import { ActivesModule } from '../actives/actives.module'

@Module({
  controllers: [DependenciesController],
  providers: [DependenciesService],
  imports: [ActivesModule],
})
export class DependenciesModule {}
