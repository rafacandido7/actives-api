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

import { DependenciesService } from './dependencies.service'

import { CreateDependencyDto } from './dto/create-dependency.dto'
import { UpdateDependencyDto } from './dto/update-dependency.dto'

@ApiTags('Dependency')
@Controller('dependencies')
export class DependenciesController {
  constructor(private readonly dependenciesService: DependenciesService) {}

  @Post()
  @ApiResponse({
    status: 201,
    description: 'The dependency has been successfully created.',
    type: UpdateDependencyDto,
  })
  @ApiBody({ type: CreateDependencyDto })
  create(@Body() createActiveDto: CreateDependencyDto) {
    return this.dependenciesService.create(createActiveDto)
  }

  @Get()
  @ApiResponse({
    status: 200,
    description: 'List of all dependencies.',
    type: [UpdateDependencyDto],
  })
  findAll() {
    return this.dependenciesService.findAll()
  }

  @Get(':id')
  @ApiParam({
    name: 'id',
    description: 'ID of the dependency',
    example: 'c467aa4d-470e-4da0-b616-65382a11cb1a',
  })
  @ApiResponse({
    status: 200,
    description: 'This action returns details of the dependency filtered by id',
    type: UpdateDependencyDto,
  })
  findOne(@Param('id') id: string) {
    return this.dependenciesService.findOne({ id })
  }

  @Get('/active/:activeId')
  @ApiResponse({
    status: 200,
    description: 'List of all dependencies by activeId.',
    type: [UpdateDependencyDto],
  })
  findByActiveId(@Param('activeId') activeId: string) {
    return this.dependenciesService.findByActiveId(activeId)
  }

  @Put(':id')
  @ApiParam({
    name: 'id',
    description: 'ID of the dependency',
    example: 'c467aa4d-470e-4da0-b616-65382a11cb1a',
  })
  @ApiResponse({
    status: 200,
    description: 'The dependency has been successfully updated.',
    type: UpdateDependencyDto,
  })
  @ApiBody({ type: UpdateDependencyDto })
  update(
    @Param('id') id: string,
    @Body() updateActiveDto: UpdateDependencyDto,
  ) {
    return this.dependenciesService.update(id, updateActiveDto)
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiParam({
    name: 'id',
    description: 'ID of the dependency',
    example: 'c467aa4d-470e-4da0-b616-65382a11cb1a',
  })
  @ApiResponse({
    status: 204,
    description: 'The dependency has been successfully deleted.',
  })
  remove(@Param('id') id: string) {
    return this.dependenciesService.remove(id)
  }
}
