import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsString,
  MinLength,
} from 'class-validator'

import { UserType } from '../entities/UserType'

export class SignUpDto {
  @IsString()
  @IsNotEmpty()
  name: string

  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string

  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  password: string

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
