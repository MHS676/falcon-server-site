import { PillarsService } from './pillars.service';
import { CreatePillarDto } from './dto/create-pillar.dto';
import { UpdatePillarDto } from './dto/update-pillar.dto';
export declare class PillarsController {
    private readonly pillarsService;
    constructor(pillarsService: PillarsService);
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
    uploadFile(file: any): {
        success: boolean;
        message: string;
        filename: any;
        path: string;
        size: any;
    };
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
    reorder(data: Array<{
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
