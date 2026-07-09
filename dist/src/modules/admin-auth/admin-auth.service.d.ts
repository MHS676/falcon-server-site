import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../../database/prisma.service';
export declare class AdminAuthService {
    private prisma;
    private jwtService;
    constructor(prisma: PrismaService, jwtService: JwtService);
    register(registerDto: {
        name: string;
        email: string;
        password: string;
    }): Promise<{
        message: string;
        user: {
            id: string;
            name: string | null;
            email: string;
            role: string;
        };
    }>;
    login(loginDto: {
        email: string;
        password: string;
    }): Promise<{
        token: string;
        user: {
            id: string;
            name: string | null;
            email: string;
            role: string;
        };
    }>;
}
