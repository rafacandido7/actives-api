import { Injectable, NotFoundException } from '@nestjs/common'

import { SupportCallRepository } from './../../shared/database/repositories/support-call.repository'

import { CreateSupportCallDto } from './dto/create-support-call.dto'
import { UpdateSupportCallDto } from './dto/update-support-call.dto'

import { SupportType } from './entities/SupportType.entity'

import { ActivesService } from '../actives/actives.service'
import { DependenciesService } from './../dependencies/dependencies.service'
import { StatusType } from './entities/StatusType.entity'

@Injectable()
export class SupportCallService {
  constructor(
    private readonly dependenciesService: DependenciesService,
    private readonly activesService: ActivesService,
    private readonly supportCallRepository: SupportCallRepository,
  ) {}

  async create(createSupportCallDto: CreateSupportCallDto) {
    const { name, report, urgency, supportType, activeId, dependencyId } =
      createSupportCallDto

    if (supportType === SupportType.ACTIVE) {
      if (!(await this.activesService.findOne({ id: activeId }))) {
        throw new NotFoundException('Active Not found')
      }
    }

    if (supportType === SupportType.DEPENDENCY) {
      if (!(await this.dependenciesService.findOne({ id: dependencyId }))) {
        throw new NotFoundException('Dependency Not found')
      }
    }

    const supportCall = await this.supportCallRepository.create({
      data: {
        name,
        report,
        urgency,
        supportType,
        activeId,
        dependencyId,
        status: StatusType.PENDING,
      },
    })

    if (!supportCall) {
      throw new Error('Create support call error....')
    }

    return supportCall
  }

  async findAll() {
    return await this.supportCallRepository.findMany({})
  }

  async findOne(id: string) {
    return await this.supportCallRepository.findFirst({ where: { id } })
  }

  async update(id: string, updateSupportCallDto: UpdateSupportCallDto) {
    const {
      name,
      report,
      status,
      supportType,
      urgency,
      activeId,
      dependencyId,
    } = updateSupportCallDto

    const supportCall = await this.supportCallRepository.findFirst({
      where: {
        id,
      },
    })

    if (!supportCall) {
      throw new NotFoundException('Support call not found')
    }

    if (supportType === SupportType.ACTIVE) {
      if (!(await this.activesService.findOne({ id: activeId }))) {
        throw new NotFoundException('Active Not found')
      }
    }

    if (supportType === SupportType.DEPENDENCY) {
      if (!(await this.dependenciesService.findOne({ id: dependencyId }))) {
        throw new NotFoundException('Dependency Not found')
      }
    }

    return await this.supportCallRepository.update({
      where: {
        id,
      },
      data: {
        name,
        report,
        status,
        supportType,
        urgency,
      },
    })
  }

  async remove(id: string) {
    await this.supportCallRepository.delete({
      where: { id },
    })
  }
}
