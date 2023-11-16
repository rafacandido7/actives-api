import { Injectable, NotFoundException } from '@nestjs/common'
import { ApiParam, ApiResponse } from '@nestjs/swagger'

import { DependenciesRepository } from './../../shared/database/repositories/dependencies.repository'

import { CreateDependencyDto } from './dto/create-dependency.dto'
import { UpdateDependencyDto } from './dto/update-dependency.dto'

import { ActivesService } from '../actives/actives.service'

@Injectable()
export class DependenciesService {
  constructor(
    private readonly dependenciesRepository: DependenciesRepository,
    private readonly activesService: ActivesService,
  ) {}

  @ApiResponse({
    status: 201,
    description: 'The active has been successfully created.',
    type: UpdateDependencyDto,
  })
  async create(createDependencyDto: CreateDependencyDto) {
    const { activeId, description, healthStatus, name, lifeTime, value } =
      createDependencyDto

    const active = await this.activesService.findOne({ id: activeId })

    if (!active) {
      throw new NotFoundException('Active not found')
    }

    const dependency = await this.dependenciesRepository.create({
      data: {
        activeId,
        description,
        healthStatus,
        name,
        lifeTime,
        value,
      },
    })

    if (!dependency) {
      throw new Error('Create dependency error')
    }

    return dependency
  }

  @ApiResponse({
    status: 200,
    description: 'This action returns all dependencies',
    type: [UpdateDependencyDto],
  })
  async findAll() {
    return await this.dependenciesRepository.findMany({})
  }

  @ApiParam({
    name: 'id',
    description: 'ID of the dependency',
    example: '72bb6b8a-c00d-4929-a6df-47fa101fda0b',
  })
  @ApiResponse({
    status: 200,
    description: 'This action returns details of the dependency filtered by id',
    type: UpdateDependencyDto,
  })
  async findOne(id: string) {
    return await this.dependenciesRepository.findFirst({
      where: { id },
    })
  }

  @ApiParam({
    name: 'activeId',
    description: 'ID of the active',
    example: '72bb6b8a-c00d-4929-a6df-47fa101fda0b',
  })
  @ApiResponse({
    status: 200,
    description: 'This action returns all dependencies by activeId',
    type: [UpdateDependencyDto],
  })
  async findByActiveId(activeId: string) {
    return await this.dependenciesRepository.findMany({
      where: { activeId },
    })
  }

  @ApiParam({
    name: 'id',
    description: 'ID of the active',
    example: '72bb6b8a-c00d-4929-a6df-47fa101fda0b',
  })
  @ApiResponse({
    status: 200,
    description: 'This action updates an dependency',
    type: UpdateDependencyDto,
  })
  async update(id: string, updateDependencyDto: UpdateDependencyDto) {
    const { activeId, description, healthStatus, name, lifeTime, value } =
      updateDependencyDto

    const active = await this.activesService.findOne({ id: activeId })

    if (!active) {
      throw new NotFoundException('Active not found')
    }

    const updatedDependency = await this.dependenciesRepository.update({
      where: { id, activeId },
      data: {
        activeId,
        description,
        healthStatus,
        name,
        lifeTime,
        value,
      },
    })

    if (!updatedDependency) {
      throw new Error('Update dependency error')
    }

    return updatedDependency
  }

  @ApiParam({
    name: 'id',
    description: 'ID of the dependency',
    example: '72bb6b8a-c00d-4929-a6df-47fa101fda0b',
  })
  @ApiResponse({
    status: 204,
    description: 'This action removes an active',
  })
  async remove(id: string) {
    await this.dependenciesRepository.delete({
      where: { id },
    })
  }
}
