import { Injectable } from '@nestjs/common'
import { type Prisma } from '@prisma/client'

import { PrismaService } from '../prisma.service'

@Injectable()
export class ActivesRepository {
  constructor(private readonly prismaService: PrismaService) {}

  create(createDto: Prisma.ActiveCreateArgs) {
    return this.prismaService.active.create(createDto)
  }

  findMany(findManyDto: Prisma.ActiveFindManyArgs) {
    return this.prismaService.active.findMany(findManyDto)
  }

  findFirst(findFirstDto: Prisma.ActiveFindFirstArgs) {
    return this.prismaService.active.findFirst(findFirstDto)
  }

  update(updateDto: Prisma.ActiveUpdateArgs) {
    return this.prismaService.active.update(updateDto)
  }

  delete(deleteDto: Prisma.ActiveDeleteArgs) {
    return this.prismaService.active.delete(deleteDto)
  }
}
