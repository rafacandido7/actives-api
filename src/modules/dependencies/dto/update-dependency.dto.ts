import { CreateDependencyDto } from './create-dependency.dto'
import { IsUUID } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'

export class UpdateDependencyDto extends CreateDependencyDto {
  @ApiProperty({
    description: 'Id of the Dependency',
    example: '72bb6b8a-c00d-4929-a6df-47fa101fda0b',
  })
  @IsUUID()
  id: string
}
