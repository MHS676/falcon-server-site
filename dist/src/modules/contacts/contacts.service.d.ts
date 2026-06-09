import { PrismaService } from '../../database/prisma.service';
import { CreateContactDto } from './dto/create-contact.dto';
export declare class ContactsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createContactDto: CreateContactDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        phone: string | null;
        email: string;
        subject: string;
        message: string;
        status: string;
        userId: string | null;
    }>;
    findAll(): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        phone: string | null;
        email: string;
        subject: string;
        message: string;
        status: string;
        userId: string | null;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        phone: string | null;
        email: string;
        subject: string;
        message: string;
        status: string;
        userId: string | null;
    } | null>;
    updateStatus(id: string, status: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        phone: string | null;
        email: string;
        subject: string;
        message: string;
        status: string;
        userId: string | null;
    }>;
    delete(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        phone: string | null;
        email: string;
        subject: string;
        message: string;
        status: string;
        userId: string | null;
    }>;
}
