import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ServicesService } from './services.service';
import { CreateServiceDto } from './dto/create-service.dto';

@Controller('services')
export class ServicesController {
  constructor(private readonly servicesService: ServicesService) {}

  @Post()
  async create(@Body() createServiceDto: CreateServiceDto) {
    return this.servicesService.create(createServiceDto);
  }

  @Get()
  async findAll() {
    return this.servicesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.servicesService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateServiceDto: CreateServiceDto) {
    return this.servicesService.update(id, updateServiceDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.servicesService.delete(id);
  }
}
