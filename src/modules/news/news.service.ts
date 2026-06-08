import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';
import { CreateNewsDto } from './dto/create-news.dto';

@Injectable()
export class NewsService {
  constructor(private prisma: PrismaService) {}

  async create(createNewsDto: CreateNewsDto) {
    return this.prisma.news.create({
      data: createNewsDto,
    });
  }

  async findAll(published?: boolean) {
    return this.prisma.news.findMany({
      where: published !== undefined ? { published } : undefined,
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOne(id: string) {
    return this.prisma.news.findUnique({
      where: { id },
    });
  }

  async update(id: string, updateNewsDto: CreateNewsDto) {
    return this.prisma.news.update({
      where: { id },
      data: updateNewsDto,
    });
  }

  async delete(id: string) {
    return this.prisma.news.delete({
      where: { id },
    });
  }
}
