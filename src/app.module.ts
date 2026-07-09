import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { ContactsModule } from './modules/contacts/contacts.module';
import { ServicesModule } from './modules/services/services.module';
import { NewsModule } from './modules/news/news.module';
import { SeedModule } from './modules/seed/seed.module';
import { AdminAuthModule } from './modules/admin-auth/admin-auth.module';
import { ContentManagementModule } from './modules/content-management/content-management.module';
import { PillarsModule } from './modules/pillars/pillars.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    DatabaseModule,
    ContactsModule,
    ServicesModule,
    NewsModule,
    SeedModule,
    AdminAuthModule,
    ContentManagementModule,
    PillarsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
