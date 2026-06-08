import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';
import { CreateServiceDto } from './dto/create-service.dto';

@Injectable()
export class ServicesService {
  constructor(private prisma: PrismaService) {}

  async create(createServiceDto: CreateServiceDto) {
    return this.prisma.service.create({
      data: createServiceDto,
    });
  }

  async findAll() {
    return this.prisma.service.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOne(id: string) {
    return this.prisma.service.findUnique({
      where: { id },
    });
  }

  async update(id: string, updateServiceDto: CreateServiceDto) {
    return this.prisma.service.update({
      where: { id },
      data: updateServiceDto,
    });
  }

  async delete(id: string) {
    return this.prisma.service.delete({
      where: { id },
    });
  }
}
