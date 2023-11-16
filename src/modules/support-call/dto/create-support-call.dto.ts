import { ApiProperty } from '@nestjs/swagger'
import { IsEnum, IsNotEmpty, IsString, IsUUID } from 'class-validator'
import { UrgencyType } from '../entities/UrgencyType.entity'
import { SupportType } from '../entities/SupportType.entity'

export class CreateSupportCallDto {
  @ApiProperty({
    description: 'Name of the support call',
    example: 'Error on storaging',
  })
  @IsNotEmpty()
  @IsString()
  name: string

  @ApiProperty({
    description: 'Express the urgency of the support call',
    enum: UrgencyType,
    example: UrgencyType.NORMAL,
  })
  @IsNotEmpty()
  @IsEnum(UrgencyType)
  urgency: UrgencyType

  @ApiProperty({
    description: 'Description of the support call',
    example: 'The Server123 is not saving the objects',
  })
  @IsNotEmpty()
  @IsString()
  report: string

  @ApiProperty({
    description:
      'Shows the type of the support call, if its a active support call or a dependency',
    enum: SupportType,
    example: SupportType.ACTIVE,
  })
  @IsNotEmpty()
  @IsEnum(SupportType)
  supportType: SupportType

  @ApiProperty({ description: 'ID of the active', required: false })
  @IsUUID(4, { groups: [SupportType.ACTIVE], message: 'Active ID is required' })
  activeId?: string

  @ApiProperty({ description: 'ID of the dependency', required: false })
  @IsUUID(4, {
    groups: [SupportType.DEPENDENCY],
    message: 'Dependency ID is required',
  })
  dependencyId?: string
}
