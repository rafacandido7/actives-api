import { Injectable } from '@nestjs/common'
import { type Prisma } from '@prisma/client'

import { PrismaService } from '../prisma.service'

@Injectable()
export class SupportCallRepository {
  constructor(private readonly prismaService: PrismaService) {}

  create(createDto: Prisma.SupportCallCreateArgs) {
    return this.prismaService.supportCall.create(createDto)
  }

  findMany(findManyDto: Prisma.SupportCallFindManyArgs) {
    return this.prismaService.supportCall.findMany(findManyDto)
  }

  findFirst(findFirstDto: Prisma.SupportCallFindFirstArgs) {
    return this.prismaService.supportCall.findFirst(findFirstDto)
  }

  update(updateDto: Prisma.SupportCallUpdateArgs) {
    return this.prismaService.supportCall.update(updateDto)
  }

  delete(deleteDto: Prisma.SupportCallDeleteArgs) {
    return this.prismaService.supportCall.delete(deleteDto)
  }
}
