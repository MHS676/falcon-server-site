import { PrismaService } from '../../database/prisma.service';
import { CreateServiceDto } from './dto/create-service.dto';
export declare class ServicesService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createServiceDto: CreateServiceDto): Promise<{
        id: string;
        title: string;
        description: string | null;
        icon: string | null;
        category: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findAll(): Promise<{
        id: string;
        title: string;
        description: string | null;
        icon: string | null;
        category: string | null;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        title: string;
        description: string | null;
        icon: string | null;
        category: string | null;
        createdAt: Date;
        updatedAt: Date;
    } | null>;
    update(id: string, updateServiceDto: CreateServiceDto): Promise<{
        id: string;
        title: string;
        description: string | null;
        icon: string | null;
        category: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    delete(id: string): Promise<{
        id: string;
        title: string;
        description: string | null;
        icon: string | null;
        category: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
