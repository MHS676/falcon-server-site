import { NewsService } from './news.service';
import { CreateNewsDto } from './dto/create-news.dto';
export declare class NewsController {
    private readonly newsService;
    constructor(newsService: NewsService);
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
    findAll(published?: string): Promise<{
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
