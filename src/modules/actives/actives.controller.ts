import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  HttpStatus,
  HttpCode,
} from '@nestjs/common'
import { ApiTags, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger'

import { ActivesService } from './actives.service'

import { CreateActiveDto } from './dto/create-active.dto'
import { UpdateActiveDto } from './dto/update-active.dto'

@ApiTags('Actives')
@Controller('actives')
export class ActivesController {
  constructor(private readonly activesService: ActivesService) {}

  @Post()
  @ApiResponse({
    status: 201,
    description: 'The active has been successfully created.',
    type: UpdateActiveDto,
  })
  @ApiBody({ type: CreateActiveDto })
  create(@Body() createActiveDto: CreateActiveDto) {
    return this.activesService.create(createActiveDto)
  }

  @Get()
  @ApiResponse({
    status: 200,
    description: 'List of all actives.',
    type: [UpdateActiveDto],
  })
  findAll() {
    return this.activesService.findAll()
  }

  @Get(':id')
  @ApiParam({
    name: 'id',
    description: 'ID of the active',
    example: 'c467aa4d-470e-4da0-b616-65382a11cb1a',
  })
  @ApiResponse({
    status: 200,
    description: 'Details of the active.',
    type: UpdateActiveDto,
  })
  findOne(@Param('id') id: string) {
    return this.activesService.findOne({ id })
  }

  @Put(':id')
  @ApiParam({
    name: 'id',
    description: 'ID of the active',
    example: 'c467aa4d-470e-4da0-b616-65382a11cb1a',
  })
  @ApiResponse({
    status: 200,
    description: 'The active has been successfully updated.',
    type: UpdateActiveDto,
  })
  @ApiBody({ type: UpdateActiveDto })
  update(@Param('id') id: string, @Body() updateActiveDto: UpdateActiveDto) {
    return this.activesService.update(id, updateActiveDto)
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiParam({
    name: 'id',
    description: 'ID of the active',
    example: 'c467aa4d-470e-4da0-b616-65382a11cb1a',
  })
  @ApiResponse({
    status: 204,
    description: 'The active has been successfully deleted.',
  })
  remove(@Param('id') id: string) {
    return this.activesService.remove(id)
  }
}
