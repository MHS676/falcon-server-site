import { PrismaService } from '../../database/prisma.service';
import { CreateNewsDto } from './dto/create-news.dto';
export declare class NewsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createNewsDto: CreateNewsDto): Promise<{
        id: string;
        title: string;
        category: string | null;
        createdAt: Date;
        updatedAt: Date;
        image: string | null;
        content: string;
        published: boolean;
    }>;
    findAll(published?: boolean): Promise<{
        id: string;
        title: string;
        category: string | null;
        createdAt: Date;
        updatedAt: Date;
        image: string | null;
        content: string;
        published: boolean;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        title: string;
        category: string | null;
        createdAt: Date;
        updatedAt: Date;
        image: string | null;
        content: string;
        published: boolean;
    } | null>;
    update(id: string, updateNewsDto: CreateNewsDto): Promise<{
        id: string;
        title: string;
        category: string | null;
        createdAt: Date;
        updatedAt: Date;
        image: string | null;
        content: string;
        published: boolean;
    }>;
    delete(id: string): Promise<{
        id: string;
        title: string;
        category: string | null;
        createdAt: Date;
        updatedAt: Date;
        image: string | null;
        content: string;
        published: boolean;
    }>;
}
