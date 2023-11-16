import { IsEnum, IsNotEmpty, IsString } from 'class-validator'
import { HealthStatusEntity } from '../entities/HealthStatus.entity'

export class CreateActiveDto {
  @IsNotEmpty()
  @IsString()
  name: string

  @IsNotEmpty()
  @IsString()
  description: string

  @IsNotEmpty()
  @IsEnum(HealthStatusEntity)
  healthStatus: HealthStatusEntity

  @IsNotEmpty()
  @IsString()
  lifeTime: string
}
