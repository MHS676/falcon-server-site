import {
  Controller,
  Post,
  Get,
  Body,
  UseGuards,
  Request,
  HttpCode,
  HttpStatus,
  BadRequestException,
} from '@nestjs/common'
import { ContentManagementService } from './content-management.service'
import { JwtAuthGuard } from '../admin-auth/jwt-auth.guard'

@Controller('api/admin/content')
@UseGuards(JwtAuthGuard)
export class ContentManagementController {
  constructor(private readonly contentService: ContentManagementService) {}

  @Post('home-banner')
  @HttpCode(HttpStatus.OK)
  async updateHomeBanner(@Request() req, @Body() contentDto: any) {
    if (req.user.role !== 'admin') {
      throw new BadRequestException('Not authorized')
    }

    return await this.contentService.updateContent('home-banner', contentDto)
  }

  @Post('physical-security')
  @HttpCode(HttpStatus.OK)
  async updatePhysicalSecurity(@Request() req, @Body() contentDto: any) {
    if (req.user.role !== 'admin') {
      throw new BadRequestException('Not authorized')
    }

    return await this.contentService.updateContent(
      'physical-security',
      contentDto
    )
  }

  @Post('electronic-security')
  @HttpCode(HttpStatus.OK)
  async updateElectronicSecurity(@Request() req, @Body() contentDto: any) {
    if (req.user.role !== 'admin') {
      throw new BadRequestException('Not authorized')
    }

    return await this.contentService.updateContent(
      'electronic-security',
      contentDto
    )
  }

  @Post('central-monitoring')
  @HttpCode(HttpStatus.OK)
  async updateCentralMonitoring(@Request() req, @Body() contentDto: any) {
    if (req.user.role !== 'admin') {
      throw new BadRequestException('Not authorized')
    }

    return await this.contentService.updateContent(
      'central-monitoring',
      contentDto
    )
  }

  @Post('security-consulting')
  @HttpCode(HttpStatus.OK)
  async updateSecurityConsulting(@Request() req, @Body() contentDto: any) {
    if (req.user.role !== 'admin') {
      throw new BadRequestException('Not authorized')
    }

    return await this.contentService.updateContent(
      'security-consulting',
      contentDto
    )
  }

  @Get('home-banner')
  async getHomeBanner() {
    return await this.contentService.getContent('home-banner')
  }

  @Get('physical-security')
  async getPhysicalSecurity() {
    return await this.contentService.getContent('physical-security')
  }

  @Get('electronic-security')
  async getElectronicSecurity() {
    return await this.contentService.getContent('electronic-security')
  }

  @Get('central-monitoring')
  async getCentralMonitoring() {
    return await this.contentService.getContent('central-monitoring')
  }

  @Get('security-consulting')
  async getSecurityConsulting() {
    return await this.contentService.getContent('security-consulting')
  }
}
