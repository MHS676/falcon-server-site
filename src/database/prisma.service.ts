import { Injectable, OnModuleInit, OnModuleDestroy, Logger } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  private readonly logger = new Logger('PrismaService');
  private connected = false;

  constructor() {
    super({
      errorFormat: 'pretty',
    });
  }

  async onModuleInit() {
    try {
      await this.$connect();
      this.connected = true;
      this.logger.log('✅ Database connected successfully');
    } catch (error: any) {
      this.logger.warn(
        `⚠️ Failed to connect to database: ${error.message}\n` +
        'Backend will start but database operations will fail.\n' +
        'Please configure DATABASE_URL to point to a running PostgreSQL server.'
      );
      this.connected = false;
    }
  }

  async onModuleDestroy() {
    if (this.connected) {
      await this.$disconnect();
    }
  }

  isConnected(): boolean {
    return this.connected;
  }
}
