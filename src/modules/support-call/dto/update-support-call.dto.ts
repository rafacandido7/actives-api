import { ApiProperty } from '@nestjs/swagger'
import { StatusType } from '../entities/StatusType.entity'
import { CreateSupportCallDto } from './create-support-call.dto'
import { IsEnum, IsNotEmpty } from 'class-validator'

export class UpdateSupportCallDto extends CreateSupportCallDto {
  @ApiProperty({
    description:
      'Shows the type of the support call, if its an active support call or a dependency',
    enum: StatusType,
    example: StatusType.PENDING,
  })
  @IsNotEmpty()
  @IsEnum(StatusType)
  status: StatusType
}
