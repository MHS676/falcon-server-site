import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { ContactsModule } from './modules/contacts/contacts.module';
import { ServicesModule } from './modules/services/services.module';
import { NewsModule } from './modules/news/news.module';

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
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
