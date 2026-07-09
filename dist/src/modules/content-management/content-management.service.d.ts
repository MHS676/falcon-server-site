import { PrismaService } from '../../database/prisma.service';
export declare class ContentManagementService {
    private prisma;
    constructor(prisma: PrismaService);
    updateContent(page: string, contentData: any): Promise<{
        success: boolean;
        message: string;
        page: string;
        data: any;
    }>;
    getContent(page: string): Promise<{
        page: string;
        title: string;
        content: {};
    }>;
}
