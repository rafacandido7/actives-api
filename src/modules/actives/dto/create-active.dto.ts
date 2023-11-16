import { ApiProperty } from '@nestjs/swagger'
import { IsEnum, IsNotEmpty, IsString } from 'class-validator'

import { HealthStatusType } from '../entities/HealthStatus.entity'

export class CreateActiveDto {
  @ApiProperty({ description: 'Name of the active', example: 'Server123' })
  @IsNotEmpty()
  @IsString()
  name: string

  @ApiProperty({
    description: 'Description of the active',
    example: 'Main server in the data center',
  })
  @IsNotEmpty()
  @IsString()
  description: string

  @ApiProperty({
    description: 'Health status of the active',
    enum: HealthStatusType,
    example: HealthStatusType.HEALTY,
  })
  @IsNotEmpty()
  @IsEnum(HealthStatusType)
  healthStatus: HealthStatusType

  @ApiProperty({ description: 'Lifetime of the active', example: '2023-12-31' })
  @IsNotEmpty()
  @IsString()
  lifeTime: string
}
