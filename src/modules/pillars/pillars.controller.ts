import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile, BadRequestException } from '@nestjs/common'
import { FileInterceptor } from '@nestjs/platform-express'
import { diskStorage } from 'multer'
import { extname } from 'path'
import { PillarsService } from './pillars.service'
import { CreatePillarDto } from './dto/create-pillar.dto'
import { UpdatePillarDto } from './dto/update-pillar.dto'

const storage = diskStorage({
  destination: './uploads/pillars',
  filename: (req, file, cb) => {
    const randomName = Array(32)
      .fill(null)
      .map(() => Math.round(Math.random() * 16).toString(16))
      .join('')
    cb(null, `${randomName}${extname(file.originalname)}`)
  },
})

@Controller('api/pillars')
export class PillarsController {
  constructor(private readonly pillarsService: PillarsService) {}

  @Post()
  create(@Body() createPillarDto: CreatePillarDto) {
    return this.pillarsService.create(createPillarDto)
  }

  @Post('upload')
  @UseInterceptors(
    FileInterceptor('file', {
      storage,
      fileFilter: (req, file, cb) => {
        if (!file.mimetype.match(/\/(jpg|jpeg|png|gif|webp)$/)) {
          cb(new BadRequestException('Only image files are allowed'), false)
        } else {
          cb(null, true)
        }
      },
      limits: {
        fileSize: 5 * 1024 * 1024, // 5MB
      },
    }),
  )
  uploadFile(@UploadedFile() file: any) {
    if (!file) {
      throw new BadRequestException('No file uploaded')
    }
    return {
      success: true,
      message: 'File uploaded successfully',
      filename: file.filename,
      path: `/uploads/pillars/${file.filename}`,
      size: file.size,
    }
  }

  @Get()
  findAll() {
    return this.pillarsService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pillarsService.findOne(id)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePillarDto: UpdatePillarDto) {
    return this.pillarsService.update(id, updatePillarDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pillarsService.remove(id)
  }

  @Post('reorder')
  reorder(@Body() data: Array<{ id: string; order: number }>) {
    return this.pillarsService.reorder(data)
  }
}
