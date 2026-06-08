import { ServicesService } from './services.service';
import { CreateServiceDto } from './dto/create-service.dto';
export declare class ServicesController {
    private readonly servicesService;
    constructor(servicesService: ServicesService);
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
