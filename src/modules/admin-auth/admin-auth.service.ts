import { Injectable, BadRequestException } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { PrismaService } from '../../database/prisma.service'

@Injectable()
export class AdminAuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService
  ) {}

  async register(registerDto: {
    name: string
    email: string
    password: string
  }) {
    // Check if user already exists
    const existingUser = await this.prisma.user.findUnique({
      where: { email: registerDto.email },
    })

    if (existingUser) {
      throw new BadRequestException('User already exists')
    }

    // Create new admin user
    const user = await this.prisma.user.create({
      data: {
        name: registerDto.name,
        email: registerDto.email,
        password: registerDto.password, // In production, hash this with bcrypt
        role: 'admin',
      },
    })

    return {
      message: 'Admin user created successfully',
      user: { id: user.id, name: user.name, email: user.email, role: user.role },
    }
  }

  async login(loginDto: { email: string; password: string }) {
    const user = await this.prisma.user.findUnique({
      where: { email: loginDto.email },
    })

    if (!user) {
      throw new BadRequestException('Invalid credentials')
    }

    // In production, use bcrypt to compare passwords
    if (user.password !== loginDto.password) {
      throw new BadRequestException('Invalid credentials')
    }

    if (user.role !== 'admin') {
      throw new BadRequestException('Not authorized to access admin panel')
    }

    const token = this.jwtService.sign({
      id: user.id,
      email: user.email,
      role: user.role,
    })

    return {
      token,
      user: { id: user.id, name: user.name, email: user.email, role: user.role },
    }
  }
}
