import { Controller, Get, Post, Body, Param, Put, Delete, Query } from '@nestjs/common';
import { NewsService } from './news.service';
import { CreateNewsDto } from './dto/create-news.dto';

@Controller('news')
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @Post()
  async create(@Body() createNewsDto: CreateNewsDto) {
    return this.newsService.create(createNewsDto);
  }

  @Get()
  async findAll(@Query('published') published?: string) {
    return this.newsService.findAll(published === 'true');
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.newsService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateNewsDto: CreateNewsDto) {
    return this.newsService.update(id, updateNewsDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.newsService.delete(id);
  }
}
