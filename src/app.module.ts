import { Module } from '@nestjs/common'
import { APP_GUARD } from '@nestjs/core'

import { UsersModule } from '@/modules/users/users.module'
import { AuthGuard } from '@/modules/auth/auth.guard'
import { AuthModule } from '@/modules/auth/auth.module'
import { DependenciesModule } from '@/modules/dependencies/dependencies.module'
import { DatabaseModule } from '@/shared/database/database.module'

import { ActivesModule } from '@/modules/actives/actives.module'
import { SupportCallModule } from './modules/support-call/support-call.module'

@Module({
  imports: [
    UsersModule,
    DatabaseModule,
    AuthModule,
    ActivesModule,
    DependenciesModule,
    SupportCallModule,
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AppModule {}
