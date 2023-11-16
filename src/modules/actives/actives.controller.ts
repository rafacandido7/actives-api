import { UsersService } from './../users/users.service'
import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common'
import { ActivesService } from './actives.service'
import { CreateActiveDto } from './dto/create-active.dto'
import { UpdateActiveDto } from './dto/update-active.dto'
import { ActiveUserId } from '@/shared/decorators/ActiveUserId'

@Controller('actives')
export class ActivesController {
  constructor(
    private readonly activesService: ActivesService,
    private readonly usersService: UsersService,
  ) {}

  @Post()
  create(@Body() createActiveDto: CreateActiveDto) {
    return this.activesService.create(createActiveDto)
  }

  @Get()
  findAll(@ActiveUserId() userId: string) {
    return this.activesService.findAll(userId)
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.activesService.findOne(+id)
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateActiveDto: UpdateActiveDto) {
    return this.activesService.update(+id, updateActiveDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.activesService.remove(+id)
  }
}
