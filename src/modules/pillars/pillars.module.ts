import { Module } from '@nestjs/common'
import { PillarsService } from './pillars.service'
import { PillarsController } from './pillars.controller'
import { DatabaseModule } from '../../database/database.module'

@Module({
  imports: [DatabaseModule],
  controllers: [PillarsController],
  providers: [PillarsService],
  exports: [PillarsService],
})
export class PillarsModule {}
