import { Module } from '@nestjs/common'
import { ContentManagementController } from './content-management.controller'
import { ContentManagementService } from './content-management.service'
import { DatabaseModule } from '../../database/database.module'

@Module({
  imports: [DatabaseModule],
  controllers: [ContentManagementController],
  providers: [ContentManagementService],
})
export class ContentManagementModule {}
