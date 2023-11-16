import { Injectable } from '@nestjs/common'
import { CreateActiveDto } from './dto/create-active.dto'
import { UpdateActiveDto } from './dto/update-active.dto'
import { ActivesRepository } from '@/shared/database/repositories/actives.repositories'

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

  findAll(userType: string) {
    return `This action returns all actives`
  }

  findOne(id: number) {
    return `This action returns a #${id} active`
  }

  update(id: number, updateActiveDto: UpdateActiveDto) {
    return `This action updates a #${id} active`
  }

  remove(id: number) {
    return `This action removes a #${id} active`
  }
}
