import { Controller, Get } from '@nestjs/common'
import { ApiOperation, ApiTags } from '@nestjs/swagger'

import { UsersService } from './users.service'

import { ActiveUserId } from '@/shared/decorators/ActiveUserId'

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiOperation({ description: 'Get User info when recives jwt token' })
  @Get('/me')
  async me(@ActiveUserId() userId: string) {
    return await this.usersService.getUserById(userId)
  }
}
