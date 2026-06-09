import { Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'
import { PassportModule } from '@nestjs/passport'
import { AdminAuthController } from './admin-auth.controller'
import { AdminAuthService } from './admin-auth.service'
import { JwtStrategy } from './jwt.strategy'
import { DatabaseModule } from '../../database/database.module'

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'your-secret-key',
      signOptions: { expiresIn: '24h' },
    }),
    DatabaseModule,
  ],
  controllers: [AdminAuthController],
  providers: [AdminAuthService, JwtStrategy],
})
export class AdminAuthModule {}
