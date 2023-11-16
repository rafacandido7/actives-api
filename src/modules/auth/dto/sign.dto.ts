import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsString,
  MinLength,
} from 'class-validator'

import { UserType } from '../entities/UserType.entity'
import { ApiProperty } from '@nestjs/swagger'

export class SignUpDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  password: string

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(UserType)
  type: UserType
}

export class SignInDto {
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string

  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  password: string
}
