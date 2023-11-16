import { IsUUID } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'

import { CreateActiveDto } from './create-active.dto'

export class UpdateActiveDto extends CreateActiveDto {
  @ApiProperty({
    description: 'Id of the active',
    example: 'c467aa4d-470e-4da0-b616-65382a11cb1a',
  })
  @IsUUID()
  id: string
}
