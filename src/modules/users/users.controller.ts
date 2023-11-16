import { Controller, Get } from '@nestjs/common'
import { ApiOperation, ApiTags } from '@nestjs/swagger'

import { UsersService } from './users.service'

import { ActiveUserId } from '@/shared/decorators/ActiveUserId'

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiOperation({ description: 'Get jwt user token' })
  @Get('/me')
  async me(@ActiveUserId() userId: string) {
    return await this.usersService.getUserById(userId)
  }
}
