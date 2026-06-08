import { PrismaService } from '../../database/prisma.service';
import { CreateContactDto } from './dto/create-contact.dto';
export declare class ContactsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createContactDto: CreateContactDto): Promise<{
        id: string;
        name: string;
        email: string;
        phone: string | null;
        subject: string;
        message: string;
        status: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string | null;
    }>;
    findAll(): Promise<{
        id: string;
        name: string;
        email: string;
        phone: string | null;
        subject: string;
        message: string;
        status: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string | null;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        name: string;
        email: string;
        phone: string | null;
        subject: string;
        message: string;
        status: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string | null;
    } | null>;
    updateStatus(id: string, status: string): Promise<{
        id: string;
        name: string;
        email: string;
        phone: string | null;
        subject: string;
        message: string;
        status: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string | null;
    }>;
    delete(id: string): Promise<{
        id: string;
        name: string;
        email: string;
        phone: string | null;
        subject: string;
        message: string;
        status: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string | null;
    }>;
}
