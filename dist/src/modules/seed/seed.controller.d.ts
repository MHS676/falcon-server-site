import { SeedService } from './seed.service';
export declare class SeedController {
    private readonly seedService;
    constructor(seedService: SeedService);
    seedData(): Promise<{
        success: boolean;
        message: string;
        data: {
            services: number;
            news: number;
            companyInfo: number;
        };
    }>;
}
