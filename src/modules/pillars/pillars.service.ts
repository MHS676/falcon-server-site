import { Injectable } from '@nestjs/common'
import { PrismaService } from '../../database/prisma.service'
import { CreatePillarDto } from './dto/create-pillar.dto'
import { UpdatePillarDto } from './dto/update-pillar.dto'

@Injectable()
export class PillarsService {
  constructor(private prisma: PrismaService) {}

  async create(createPillarDto: CreatePillarDto) {
    return this.prisma.pillar.create({
      data: {
        title: createPillarDto.title,
        description: createPillarDto.description,
        icon: createPillarDto.icon,
        image: createPillarDto.image,
        order: createPillarDto.order || 0,
      },
    })
  }

  async findAll() {
    return this.prisma.pillar.findMany({
      orderBy: {
        order: 'asc',
      },
    })
  }

  async findOne(id: string) {
    return this.prisma.pillar.findUnique({
      where: { id },
    })
  }

  async update(id: string, updatePillarDto: UpdatePillarDto) {
    return this.prisma.pillar.update({
      where: { id },
      data: updatePillarDto,
    })
  }

  async remove(id: string) {
    return this.prisma.pillar.delete({
      where: { id },
    })
  }

  async reorder(pillars: Array<{ id: string; order: number }>) {
    const updates = pillars.map((p) =>
      this.prisma.pillar.update({
        where: { id: p.id },
        data: { order: p.order },
      }),
    )
    return Promise.all(updates)
  }
}
