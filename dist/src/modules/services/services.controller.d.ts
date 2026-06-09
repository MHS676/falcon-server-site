import { ServicesService } from './services.service';
import { CreateServiceDto } from './dto/create-service.dto';
export declare class ServicesController {
    private readonly servicesService;
    constructor(servicesService: ServicesService);
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
