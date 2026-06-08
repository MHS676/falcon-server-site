import { PrismaService } from '../../database/prisma.service';
import { CreateNewsDto } from './dto/create-news.dto';
export declare class NewsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createNewsDto: CreateNewsDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        category: string | null;
        content: string;
        image: string | null;
        published: boolean;
    }>;
    findAll(published?: boolean): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        category: string | null;
        content: string;
        image: string | null;
        published: boolean;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        category: string | null;
        content: string;
        image: string | null;
        published: boolean;
    } | null>;
    update(id: string, updateNewsDto: CreateNewsDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        category: string | null;
        content: string;
        image: string | null;
        published: boolean;
    }>;
    delete(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        category: string | null;
        content: string;
        image: string | null;
        published: boolean;
    }>;
}
