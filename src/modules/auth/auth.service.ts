import { compare, hash } from 'bcryptjs'
import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'

import { UsersRepository } from '@/shared/database/repositories/user.repositories'

import { SignInDto, SignUpDto } from './dto/sign.dto'

@Injectable()
export class AuthService {
  constructor(
    private readonly usersRepository: UsersRepository,
    private readonly jwtService: JwtService,
  ) {}

  async signIn(authenticateDto: SignInDto) {
    const { email, password } = authenticateDto

    const user = await this.usersRepository.findUnique({
      where: { email },
    })

    if (!user) {
      throw new UnauthorizedException('Invalid credentials!')
    }

    const isPasswordMatched = await compare(password, user.password)

    if (!isPasswordMatched) {
      throw new UnauthorizedException('Invalid credentials!')
    }

    const accessToken = await this.generateAccessToken(user.id)

    if (!accessToken) {
      throw new Error()
    }

    return { accessToken }
  }

  async signUp(signUpDto: SignUpDto) {
    const { name, email, password } = signUpDto

    const isEmailTaken = await this.usersRepository.findUnique({
      where: { email },
      select: { id: true },
    })
    if (isEmailTaken) {
      throw new ConflictException('This email is already in use!')
    }

    const hashedPassword = await hash(password, 12)

    const newUser = await this.usersRepository.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    })

    const accessToken = await this.generateAccessToken(newUser.id)

    return { accessToken }
  }

  private async generateAccessToken(userId: string) {
    return this.jwtService.signAsync({ sub: userId })
  }
}
