import { Injectable, NotFoundException } from '@nestjs/common'

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

  async findAll() {
    return await this.dependenciesRepository.findMany({})
  }

  async findOne({ id }: { id: string }) {
    return await this.dependenciesRepository.findFirst({
      where: { id },
    })
  }

  async findByActiveId(activeId: string) {
    return await this.dependenciesRepository.findMany({
      where: { activeId },
    })
  }

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

  async remove(id: string) {
    await this.dependenciesRepository.delete({
      where: { id },
    })
  }
}
