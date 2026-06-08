import { PrismaService } from '../../database/prisma.service';
import { CreateServiceDto } from './dto/create-service.dto';
export declare class ServicesService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createServiceDto: CreateServiceDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        description: string | null;
        icon: string | null;
        category: string | null;
    }>;
    findAll(): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        description: string | null;
        icon: string | null;
        category: string | null;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        description: string | null;
        icon: string | null;
        category: string | null;
    } | null>;
    update(id: string, updateServiceDto: CreateServiceDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        description: string | null;
        icon: string | null;
        category: string | null;
    }>;
    delete(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        description: string | null;
        icon: string | null;
        category: string | null;
    }>;
}
