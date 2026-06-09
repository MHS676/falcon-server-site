import {
  Controller,
  Post,
  Body,
  HttpCode,
  HttpStatus,
  BadRequestException,
  UseGuards,
  Request,
} from '@nestjs/common'
import { AdminAuthService } from './admin-auth.service'
import { JwtAuthGuard } from './jwt-auth.guard'

@Controller('api/admin')
export class AdminAuthController {
  constructor(private readonly adminAuthService: AdminAuthService) {}

  @Post('register')
  @HttpCode(HttpStatus.CREATED)
  async register(
    @Body() registerDto: { name: string; email: string; password: string }
  ) {
    if (!registerDto.name || !registerDto.email || !registerDto.password) {
      throw new BadRequestException('Missing required fields')
    }

    try {
      return await this.adminAuthService.register(registerDto)
    } catch (error) {
      throw new BadRequestException(error.message)
    }
  }

  @Post('login')
  @HttpCode(HttpStatus.OK)
  async login(@Body() loginDto: { email: string; password: string }) {
    if (!loginDto.email || !loginDto.password) {
      throw new BadRequestException('Missing email or password')
    }

    try {
      return await this.adminAuthService.login(loginDto)
    } catch (error) {
      throw new BadRequestException(error.message)
    }
  }

  @UseGuards(JwtAuthGuard)
  @Post('verify-token')
  async verifyToken(@Request() req) {
    return { valid: true, user: req.user }
  }
}
