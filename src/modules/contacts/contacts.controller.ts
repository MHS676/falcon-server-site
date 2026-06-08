import { Controller, Post, Get, Body, Param, UseGuards } from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { CreateContactDto } from './dto/create-contact.dto';

@Controller('contacts')
export class ContactsController {
  constructor(private readonly contactsService: ContactsService) {}

  @Post()
  async create(@Body() createContactDto: CreateContactDto) {
    return this.contactsService.create(createContactDto);
  }

  @Get()
  async findAll() {
    return this.contactsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.contactsService.findOne(id);
  }
}
