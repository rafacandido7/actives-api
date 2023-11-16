import { Injectable } from '@nestjs/common'
import { ApiResponse, ApiParam } from '@nestjs/swagger'

import { CreateActiveDto } from './dto/create-active.dto'
import { UpdateActiveDto } from './dto/update-active.dto'

import { ActivesRepository } from '@/shared/database/repositories/actives.repositories'

@Injectable()
export class ActivesService {
  constructor(private readonly activesRepository: ActivesRepository) {}

  @ApiResponse({
    status: 201,
    description: 'The active has been successfully created.',
    type: CreateActiveDto,
  })
  async create(createActiveDto: CreateActiveDto) {
    const { name, description, healthStatus, lifeTime } = createActiveDto

    const newActive = await this.activesRepository.create({
      data: {
        name,
        description,
        healthStatus,
        lifeTime,
      },
    })

    if (!newActive) {
      throw new Error('Create active error....')
    }

    return newActive
  }

  @ApiResponse({
    status: 200,
    description: 'This action returns all actives',
    type: [CreateActiveDto],
  })
  async findAll() {
    return await this.activesRepository.findMany({})
  }

  @ApiParam({
    name: 'id',
    description: 'ID of the active',
    example: 'c467aa4d-470e-4da0-b616-65382a11cb1a',
  })
  @ApiResponse({
    status: 200,
    description: 'This action returns details of the active',
    type: CreateActiveDto,
  })
  async findOne(id: string) {
    return await this.activesRepository.findFirst({
      where: { id },
    })
  }

  @ApiParam({
    name: 'id',
    description: 'ID of the active',
    example: 'c467aa4d-470e-4da0-b616-65382a11cb1a',
  })
  @ApiResponse({
    status: 200,
    description: 'This action updates an active',
    type: CreateActiveDto,
  })
  async update(id: string, updateActiveDto: UpdateActiveDto) {
    const { name, lifeTime, healthStatus, description } = updateActiveDto

    return await this.activesRepository.update({
      where: { id },
      data: { name, lifeTime, healthStatus, description },
    })
  }

  @ApiParam({
    name: 'id',
    description: 'ID of the active',
    example: 'c467aa4d-470e-4da0-b616-65382a11cb1a',
  })
  @ApiResponse({
    status: 200,
    description: 'This action removes an active',
  })
  async remove(id: string) {
    await this.activesRepository.delete({
      where: { id },
    })
  }
}
