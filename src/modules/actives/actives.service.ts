import { Injectable } from '@nestjs/common'

import { CreateActiveDto } from './dto/create-active.dto'
import { UpdateActiveDto } from './dto/update-active.dto'

import { ActivesRepository } from '@/shared/database/repositories/actives.repository'

@Injectable()
export class ActivesService {
  constructor(private readonly activesRepository: ActivesRepository) {}

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

  async findAll() {
    return await this.activesRepository.findMany({})
  }

  async findOne({ id }: { id: string }) {
    return await this.activesRepository.findFirst({
      where: { id },
    })
  }

  async update(id: string, updateActiveDto: UpdateActiveDto) {
    const { name, lifeTime, healthStatus, description } = updateActiveDto

    return await this.activesRepository.update({
      where: { id },
      data: { name, lifeTime, healthStatus, description },
    })
  }

  async remove(id: string) {
    await this.activesRepository.delete({
      where: { id },
    })
  }
}
