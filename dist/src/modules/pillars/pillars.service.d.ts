import { PrismaService } from '../../database/prisma.service';
import { CreatePillarDto } from './dto/create-pillar.dto';
import { UpdatePillarDto } from './dto/update-pillar.dto';
export declare class PillarsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createPillarDto: CreatePillarDto): Promise<{
        id: string;
        title: string;
        description: string;
        icon: string | null;
        createdAt: Date;
        updatedAt: Date;
        image: string | null;
        order: number;
    }>;
    findAll(): Promise<{
        id: string;
        title: string;
        description: string;
        icon: string | null;
        createdAt: Date;
        updatedAt: Date;
        image: string | null;
        order: number;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        title: string;
        description: string;
        icon: string | null;
        createdAt: Date;
        updatedAt: Date;
        image: string | null;
        order: number;
    } | null>;
    update(id: string, updatePillarDto: UpdatePillarDto): Promise<{
        id: string;
        title: string;
        description: string;
        icon: string | null;
        createdAt: Date;
        updatedAt: Date;
        image: string | null;
        order: number;
    }>;
    remove(id: string): Promise<{
        id: string;
        title: string;
        description: string;
        icon: string | null;
        createdAt: Date;
        updatedAt: Date;
        image: string | null;
        order: number;
    }>;
    reorder(pillars: Array<{
        id: string;
        order: number;
    }>): Promise<{
        id: string;
        title: string;
        description: string;
        icon: string | null;
        createdAt: Date;
        updatedAt: Date;
        image: string | null;
        order: number;
    }[]>;
}
