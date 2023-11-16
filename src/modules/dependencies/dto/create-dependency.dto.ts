import { ApiProperty } from '@nestjs/swagger'
import { IsEnum, IsNotEmpty, IsNumber, IsString, IsUUID } from 'class-validator'

import { HealthStatusEntity } from '../entities/HealthStatus.entity'

export class CreateDependencyDto {
  @ApiProperty({ description: 'Name of the dependency', example: 'HD' })
  @IsNotEmpty()
  @IsString()
  name: string

  @ApiProperty({
    description: 'Id of the active',
    example: 'c467aa4d-470e-4da0-b616-65382a11cb1a',
  })
  @IsString()
  @IsUUID()
  @IsNotEmpty()
  activeId: string

  @ApiProperty({
    description: 'Health status of the dependency',
    enum: HealthStatusEntity,
    example: HealthStatusEntity.HEALTY,
  })
  @IsNotEmpty()
  @IsEnum(HealthStatusEntity)
  healthStatus: HealthStatusEntity

  @ApiProperty({
    description: 'Description of the dependency',
    example: 'The storage of the Server123',
  })
  @IsNotEmpty()
  @IsString()
  description: string

  @ApiProperty({
    description: 'Value of the dependency',
    example: '123',
  })
  @IsNotEmpty()
  @IsNumber()
  value: number

  @ApiProperty({
    description: 'Lifetime of the dependency',
    example: '2023-12-31',
  })
  @IsNotEmpty()
  @IsString()
  lifeTime: string
}
