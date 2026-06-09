import { ContactsService } from './contacts.service';
import { CreateContactDto } from './dto/create-contact.dto';
export declare class ContactsController {
    private readonly contactsService;
    constructor(contactsService: ContactsService);
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
}
