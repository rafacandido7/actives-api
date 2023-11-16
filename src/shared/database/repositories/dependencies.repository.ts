import { Injectable } from '@nestjs/common'
import { type Prisma } from '@prisma/client'

import { PrismaService } from '../prisma.service'

@Injectable()
export class DependenciesRepository {
  constructor(private readonly prismaService: PrismaService) {}

  create(createDto: Prisma.DependencyCreateArgs) {
    return this.prismaService.dependency.create(createDto)
  }

  findMany(findManyDto: Prisma.DependencyFindManyArgs) {
    return this.prismaService.dependency.findMany(findManyDto)
  }

  findFirst(findFirstDto: Prisma.DependencyFindFirstArgs) {
    return this.prismaService.dependency.findFirst(findFirstDto)
  }

  update(updateDto: Prisma.DependencyUpdateArgs) {
    return this.prismaService.dependency.update(updateDto)
  }

  delete(deleteDto: Prisma.DependencyDeleteArgs) {
    return this.prismaService.dependency.delete(deleteDto)
  }
}
