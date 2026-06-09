import { PrismaService } from '../../database/prisma.service';
export declare class SeedService {
    private prisma;
    constructor(prisma: PrismaService);
    seedDatabase(): Promise<{
        success: boolean;
        message: string;
        data: {
            services: number;
            news: number;
            companyInfo: number;
        };
    }>;
}
